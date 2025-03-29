export interface PlaylistAnalysis {
  /** A 4-word maximum description of the user's music persona */
  persona: string;
  /** Detailed analysis of the user's personality based on their music taste */
  personality: string;
  /** Comprehensive music recommendations based on the analysis */
  recommendations: string;
}

export interface AnalysisComponentProps {
  /** The analysis text to display */
  text: string;
  /** Whether the component is in a loading state */
  isLoading: boolean;
} 