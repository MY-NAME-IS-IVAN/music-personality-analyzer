const PlaylistDropdown = () => {
  return (
    <div className='mb-8'>
      <label htmlFor='playlist-select' className='mb-2 block text-gray-700'>
        Select Playlist to Analyze:
      </label>
      <select
        id='playlist-select'
        className='w-full rounded-md border border-gray-200 bg-gray-100 p-2 text-xs text-gray-800 focus:border-gray-400 focus:ring-2 focus:ring-gray-300 sm:p-3 sm:text-sm'
      >
        <option value=''>Liked Songs</option>
        <option value=''>BIG BABY TAPE - LAFLARE</option>
        <option value=''>lofi beats</option>
        <option value=''>Reading Soundtrack</option>
      </select>
    </div>
  );
};

export default PlaylistDropdown;
