// Components
import GenresSection from './components/GenresSection';
import MainHeader from './components/MainHeader';
import PersonalityDescription from './components/PersonalityDescription';
import PlaylistDropdown from './components/PlaylistDropdown';
import PlaylistPersonaHeader from './components/PlaylistPersonaHeader';
import RecommendationsDescription from './components/RecommendationsDescription';
import WebsiteSummary from './components/WebsiteSummary';

function App() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
      <MainHeader />
      <WebsiteSummary />
      <PlaylistDropdown />
      <PlaylistPersonaHeader />
      <GenresSection />
      <PersonalityDescription />
      <RecommendationsDescription />
    </div>
  );
}

export default App;