import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { TrackData } from '../types/trackData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ArtistsSectionProps {
  tracks: TrackData[];
}

const ArtistsSection: React.FC<ArtistsSectionProps> = ({ tracks }) => {
  // Calculate artist frequencies
  const artistFrequencies = tracks.reduce((acc, track) => {
    const artists = track.artistNames.split(',').map(artist => artist.trim());
    artists.forEach(artist => {
      acc[artist] = (acc[artist] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  // Get top 5 artists
  const topArtists = Object.entries(artistFrequencies)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Calculate total tracks for percentage
  const totalTracks = tracks.length;

  const data: ChartData<'doughnut'> = {
    labels: topArtists.map(([artist]) => artist),
    datasets: [
      {
        data: topArtists.map(([, count]) => (count / totalTracks) * 100),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
        hoverBackgroundColor: [
          '#FF91A4',
          '#68BBE3',
          '#FFE182',
          '#76D2D2',
          '#B388FF',
        ],
      },
    ],
  };

  // Chart options for a modern doughnut chart
  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '50%', // Makes it a doughnut chart
    plugins: {
      legend: {
        display: false, // Hides legend to keep it clean
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed.toFixed(1) + '%';
            }
            return label;
          },
        },
      },
    },
  };
  return (
    <section className='mb-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-center'>
      <div className='rounded-xl bg-white p-6 flex items-center justify-center sm:p-8'>
        <Doughnut data={data} options={options} />
      </div>
      <div>
        <h2 className='mb-2 text-xl font-bold text-gray-800'>
          Favorite Artists
        </h2>
        <ul className='list-none space-y-1 text-sm text-gray-700 sm:text-base'>
          {topArtists.map(([artist, count]) => (
            <li key={artist}>
              {artist} ({count} tracks)
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArtistsSection;
