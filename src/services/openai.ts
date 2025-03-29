import { TrackData } from '../types/trackData';

interface PlaylistAnalysis {
  persona: string;
  personality: string;
  recommendations: string;
}

const INITIAL_TRACKS = 500;

export const analyzePlaylist = async (tracks: TrackData[]): Promise<PlaylistAnalysis> => {
  let currentTracks = Math.min(tracks.length, INITIAL_TRACKS);
  let lastError: Error | null = null;

  while (currentTracks >= 50) {
    try {
      const limitedTracks = tracks.slice(0, currentTracks);
      const totalTracks = tracks.length;
      const sampleText = limitedTracks.length < totalTracks ? 'sample from the' : '';
      const sampleNote = limitedTracks.length < totalTracks ? 
        `Note: This is a sample of ${limitedTracks.length} tracks from a total of ${totalTracks} tracks.` : '';

      const prompt = `Analyze this ${sampleText} playlist and provide deep insights about the listener's personality and music taste. 
${sampleNote}

Playlist tracks:
${limitedTracks.map(track => `${track.artistNames} - ${track.trackName}`).join('\n')}

Based on these tracks, please provide:
1. A 4-word maximum playlist persona that captures the essence of this music taste (e.g., "Energetic Rock Enthusiast")

2. A comprehensive personality analysis (at least 100 words) that covers:
   - What their music choices reveal about their personality traits
   - Their likely emotional characteristics based on their music preferences
   - Their potential social and lifestyle preferences
   - How their music taste might reflect their approach to life

3. Broad music recommendations (at least 100 words) including:
   - Genres they might enjoy exploring
   - Types of artists they should discover
   - Musical elements they seem to appreciate
   - Emerging music trends that might interest them
   - Music-related activities or experiences they might enjoy

Return your response in this exact JSON format:
{
  "persona": "your 4-word persona here",
  "personality": "your detailed personality analysis here",
  "recommendations": "your comprehensive music recommendations here"
}`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a music analysis expert. You will analyze the provided playlist and return your analysis in the exact JSON format requested. Provide detailed, insightful analysis of personality and comprehensive music recommendations.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data.error?.message || 'Unknown error';
        
        if (errorMessage.includes('maximum context length')) {
          currentTracks = Math.floor(currentTracks * 0.7);
          continue;
        }
        
        throw new Error(`API Error: ${errorMessage}`);
      }

      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error('Invalid response from OpenAI API');
      }

      try {
        const analysis = JSON.parse(content.trim());
        
        if (!analysis.persona || !analysis.personality || !analysis.recommendations) {
          throw new Error('Invalid response format from OpenAI API');
        }

        return analysis;
      } catch {
        throw new Error('Failed to parse analysis results');
      }
    } catch (error) {
      lastError = error as Error;
      
      if (error instanceof Error && !error.message.includes('maximum context length')) {
        throw error;
      }
      
      currentTracks = Math.floor(currentTracks * 0.7);
    }
  }

  throw new Error(`Failed to analyze playlist. Could not find a working track count. ${lastError?.message || ''}`);
}; 