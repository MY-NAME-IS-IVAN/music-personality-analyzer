const MainHeader: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
        Music Personality Analyzer
      </h1>
      <p className="mt-4 text-base text-gray-600 sm:text-lg">
        Powered by AI to analyze your Spotify playlists
      </p>
    </header>
  );
};

export default MainHeader;
