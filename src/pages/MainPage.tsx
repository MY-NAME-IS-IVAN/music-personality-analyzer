import { useState } from 'react';
import { TrackData } from '../types/trackData';
import { PlaylistAnalysis } from '../types/analysis';
import { analyzePlaylist } from '../services/openai';

import ArtistsSection from '../components/GenresSection';
import MainHeader from '../components/MainHeader';
import PersonalityDescription from '../components/PersonalityDescription';
import PlaylistPersonaHeader from '../components/PlaylistPersonaHeader';
import RecommendationsDescription from '../components/RecommendationsDescription';
import WebsiteSummary from '../components/WebsiteSummary';
import SubmitFileForm from '../components/SubmitFileForm';
import ExportifyInstructions from '../components/ExportifyInstructions';

const MainPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isFileSubmitted, setIsFileSubmitted] = useState<boolean>(false);
  const [tracks, setTracks] = useState<TrackData[]>([]);
  const [analysis, setAnalysis] = useState<PlaylistAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSubmit = async (parsedTracks: TrackData[]) => {
    setTracks(parsedTracks);
    setIsFileSubmitted(true);
    setIsLoading(true);
    setError(null);

    try {
      const playlistAnalysis = await analyzePlaylist(parsedTracks);
      setAnalysis(playlistAnalysis);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze playlist';
      console.error('Analysis error:', err);
      setError(errorMessage);
      setIsFileSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-3 py-4 sm:px-6 sm:py-8 lg:px-8">
        <MainHeader />
        <WebsiteSummary />
        
        {error && (
          <div className="mb-6 sm:mb-8 rounded-lg bg-red-50 p-3 sm:p-4 text-sm sm:text-base text-red-700" role="alert">
            <p>{error}</p>
            <button 
              onClick={() => setError(null)}
              className="mt-2 text-sm font-medium text-red-800 hover:text-red-900"
            >
              Dismiss
            </button>
          </div>
        )}

        {!isFileSubmitted && (
          <>
            <ExportifyInstructions />
            <SubmitFileForm
              file={file}
              setFile={setFile}
              onFileSubmit={handleFileSubmit}
            />
          </>
        )}

        {isFileSubmitted && (
          <div className="space-y-6 sm:space-y-8">
            <PlaylistPersonaHeader persona={analysis?.persona || 'Analyzing...'} />
            <ArtistsSection tracks={tracks} />
            <PersonalityDescription 
              text={analysis?.personality || ''} 
              isLoading={isLoading} 
            />
            <RecommendationsDescription 
              text={analysis?.recommendations || ''} 
              isLoading={isLoading} 
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default MainPage;
