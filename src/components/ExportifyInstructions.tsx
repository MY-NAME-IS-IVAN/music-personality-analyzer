const ExportifyInstructions: React.FC = () => {
  return (
    <section aria-labelledby="instructions-title" className="mb-6 sm:mb-8 rounded-xl bg-blue-50 p-3 sm:p-6 shadow-sm">
      <h2 id="instructions-title" className="mb-3 sm:mb-4 text-base sm:text-xl font-bold text-gray-800">
        How to Get Your Playlist Data
      </h2>
      <ol className="space-y-3 sm:space-y-4">
        <li className="flex items-start space-x-2 sm:space-x-3">
          <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs sm:text-sm text-white" aria-hidden="true">
            1
          </span>
          <p className="text-sm sm:text-lg text-gray-700">
            Visit{' '}
            <a 
              href="https://exportify.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              exportify.net
            </a>
          </p>
        </li>
        <li className="flex items-start space-x-2 sm:space-x-3">
          <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs sm:text-sm text-white" aria-hidden="true">
            2
          </span>
          <p className="text-sm sm:text-lg text-gray-700">
            Log in with your Spotify account and authorize Exportify
          </p>
        </li>
        <li className="flex items-start space-x-2 sm:space-x-3">
          <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs sm:text-sm text-white" aria-hidden="true">
            3
          </span>
          <p className="text-sm sm:text-lg text-gray-700">
            Find your favorite playlist and click the "Export" button next to it
          </p>
        </li>
        <li className="flex items-start space-x-2 sm:space-x-3">
          <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs sm:text-sm text-white" aria-hidden="true">
            4
          </span>
          <p className="text-sm sm:text-lg text-gray-700">
            Upload the downloaded CSV file below to analyze your music personality!
          </p>
        </li>
      </ol>
    </section>
  );
};

export default ExportifyInstructions; 