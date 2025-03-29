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

function App() {
  // Chart data for the doughnut chart
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
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Main Heading */}
      <h1 className="mb-6 text-center text-4xl font-semibold text-gray-800 sm:text-5xl">
        Music Personality Analyzer
      </h1>

      {/* Description Paragraph */}
      <p className="mb-8 text-center text-sm text-gray-600 sm:text-base">
        Music Personality Analyzer is a web tool that analyzes your Spotify
        playlist and provides unique insights based on 10 key audio attributes
        like danceability, energy, and tempo. Export your playlist, upload it,
        and let AI reveal patterns in your music taste. Completely open-source
        and privacy-friendly.
      </p>

      {/* Playlist Dropdown */}
      <div className="mb-8">
        <label htmlFor="playlist-select" className="mb-2 block text-gray-700">
          Select Playlist to Analyze:
        </label>
        <select
          id="playlist-select"
          className="w-full rounded-md border border-gray-200 bg-gray-100 p-2 text-xs text-gray-800 focus:border-gray-400 focus:ring-2 focus:ring-gray-300 sm:p-3 sm:text-sm"
        >
          <option value="">Liked Songs</option>
          <option value="">BIG BABY TAPE - LAFLARE</option>
          <option value="">lofi beats</option>
          <option value="">Reading Soundtrack</option>
        </select>
      </div>

      {/* Playlist Persona */}
      <h2 className="mb-6 text-center text-2xl font-light text-gray-700 sm:text-3xl">
        Playlist Persona:{' '}
        <span className="font-bold text-blue-500">“The Timeless Classicist”</span>
      </h2>

      {/* Chart and Genres Section */}
      <div className="mb-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-center">
        <div className="rounded-xl bg-white p-6 flex items-center justify-center sm:p-8">
          <Doughnut data={data} options={options} />
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold text-gray-800">Favorite Genres</h2>
          <ul className="list-none space-y-1 text-sm text-gray-700 sm:text-base">
            <li>Rap</li>
            <li>Hip Hop</li>
            <li>Rock</li>
            <li>East Coast Hip Hop</li>
            <li>Classic Rock</li>
          </ul>
        </div>
      </div>

      {/* Personality Section */}
      <div className="mb-8 rounded-xl bg-gray-50 p-6 shadow sm:p-8">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Your Personality</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quaerat
          sed eum optio quod similique. Molestiae quo officiis optio officia?
          Accusamus totam eos tempore est in impedit. Ullam, officiis rem. Minus
          natus qui illo accusantium obcaecati quo inventore facere? Distinctio
          explicabo eaque ut quam. Eius id accusantium ipsa atque velit, quam
          cumque porro asperiores odit expedita esse laudantium libero eligendi!
          {/* ... (rest of the placeholder text omitted for brevity) */}
          <p className='mt-4'>See more...</p>
        </p>
      </div>

      {/* Recommendations Section */}
      <div className="mb-10 rounded-xl bg-gray-50 p-6 shadow sm:p-8">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Recommendations For You</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quaerat
          sed eum optio quod similique. Molestiae quo officiis optio officia?
          Accusamus totam eos tempore est in impedit. Ullam, officiis rem. Minus
          natus qui illo accusantium obcaecati quo inventore facere?
          <p className='mt-4'>See more...</p>
        </p>
      </div>
    </div>
  );
}

export default App;