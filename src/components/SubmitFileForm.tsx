import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { TrackData } from '../types/trackData';

interface SubmitFileFormProps {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  onFileSubmit: (tracks: TrackData[]) => void;
}

const SubmitFileForm: React.FC<SubmitFileFormProps> = ({
  file,
  setFile,
  onFileSubmit,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const parseCSV = (text: string): TrackData[] => {
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(header => header.trim());
    
    const headerMap: Record<string, keyof TrackData> = {
      'Track Name': 'trackName',
      'Album Name': 'albumName',
      'Artist Name(s)': 'artistNames',
      'Danceability': 'danceability',
      'Energy': 'energy',
      'Speechiness': 'speechiness',
      'Liveness': 'liveness',
      'Valence': 'valence',
      'Tempo': 'tempo'
    };

    return lines.slice(1).map(line => {
      const values = line.split(',').map(value => value.trim());
      const obj: TrackData = {
        trackName: '',
        albumName: '',
        artistNames: '',
        danceability: 0,
        energy: 0,
        speechiness: 0,
        liveness: 0,
        valence: 0,
        tempo: 0
      };
      
      headers.forEach((header, index) => {
        const mappedKey = headerMap[header];
        if (mappedKey) {
          const value = values[index] || '';
          if (mappedKey === 'trackName' || mappedKey === 'albumName' || mappedKey === 'artistNames') {
            obj[mappedKey] = value;
          } else {
            (obj[mappedKey] as number) = parseFloat(value) || 0;
          }
        }
      });
      
      return obj;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file first!');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const parsedData = parseCSV(text);
      onFileSubmit(parsedData);
    };
    reader.readAsText(file);
  };

  return (
    <form className='flex flex-col sm:flex-row justify-center mb-8 gap-4' onSubmit={handleSubmit}>
      <input
        type='file'
        accept='.csv'
        className='text-gray-700 rounded-xl bg-gray-50 p-3 sm:p-4 shadow cursor-pointer w-full sm:w-auto text-sm sm:text-base'
        onChange={handleFileChange}
      />
      <button
        type='submit'
        className='text-gray-100 font-bold rounded-xl bg-blue-400 p-3 sm:p-4 shadow cursor-pointer hover:bg-blue-500 transition-colors w-full sm:w-auto'
      >
        Upload
      </button>
    </form>
  );
};

export default SubmitFileForm;
