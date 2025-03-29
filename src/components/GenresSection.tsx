import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GenresSections = () => {
  const data: ChartData<'doughnut'> = {
    labels: [
      'rap',
      'hip hop',
      'rock',
      'east coast hip hop',
      'classic rock',
      'other',
    ],
    datasets: [
      {
        data: [27.3, 13.6, 13.6, 9.1, 9.1, 27.3],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#E0E0E0',
        ],
        hoverBackgroundColor: [
          '#FF91A4',
          '#68BBE3',
          '#FFE182',
          '#76D2D2',
          '#B388FF',
          '#F0F0F0',
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
          Favorite Genres
        </h2>
        <ul className='list-none space-y-1 text-sm text-gray-700 sm:text-base'>
          <li>Rap</li>
          <li>Hip Hop</li>
          <li>Rock</li>
          <li>East Coast Hip Hop</li>
          <li>Classic Rock</li>
        </ul>
      </div>
    </section>
  );
};

export default GenresSections;
