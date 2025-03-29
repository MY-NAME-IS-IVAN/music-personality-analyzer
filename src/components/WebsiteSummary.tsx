const WebsiteSummary: React.FC = () => {
  return (
    <section 
      className="mb-8 text-center"
      aria-labelledby="summary-heading"
    >
      <h2 
        id="summary-heading"
        className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl"
      >
        Discover Your Music Personality
      </h2>
      <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg">
        Upload your Spotify playlist and let our AI analyze your music taste to reveal insights 
        about your personality. Get personalized music recommendations based on your unique 
        musical preferences.
      </p>
    </section>
  );
};

export default WebsiteSummary;
