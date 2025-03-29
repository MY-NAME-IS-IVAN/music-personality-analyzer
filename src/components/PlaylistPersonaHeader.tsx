interface PlaylistPersonaHeaderProps {
  persona: string;
}

const PlaylistPersonaHeader: React.FC<PlaylistPersonaHeaderProps> = ({ persona }) => {
  return (
    <section 
      className="mb-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-center sm:p-6"
      aria-labelledby="persona-heading"
    >
      <h2 
        id="persona-heading"
        className="mb-2 text-lg font-bold text-white sm:text-xl"
      >
        Your Playlist Persona
      </h2>
      <p className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
        {persona}
      </p>
    </section>
  );
};

export default PlaylistPersonaHeader;
