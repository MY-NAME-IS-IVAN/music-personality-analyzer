import { AnalysisComponentProps } from '../types/analysis';

const RecommendationsDescription: React.FC<AnalysisComponentProps> = ({ text, isLoading }) => {
  return (
    <section className="mb-6 sm:mb-8 rounded-xl bg-white p-3 sm:p-6 shadow-sm">
      <h2 className="mb-3 sm:mb-4 text-base sm:text-xl font-bold text-gray-800">
        Music Recommendations
      </h2>
      {isLoading ? (
        <div className="flex items-center justify-center py-6 sm:py-8">
          <div className="h-6 w-6 sm:h-8 sm:w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
      ) : (
        <p className="whitespace-pre-wrap text-sm sm:text-lg text-gray-700">
          {text}
        </p>
      )}
    </section>
  );
};

export default RecommendationsDescription;
