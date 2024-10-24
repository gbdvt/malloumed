import React, { useState } from 'react';
import Summary from './Summary';
import Flashcards from './Flashcards';

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Simulate a summary and flashcards response after "uploading" the file
    const mockSummary = "This is a mock summary of the uploaded file.";
    const mockFlashcards = ["Card 1", "Card 2", "Card 3"];
    
    setSummary(mockSummary);
    setFlashcards(mockFlashcards);
  };

  return (
    <div>
      <h2>Upload your slides</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {summary && <Summary summary={summary} />}
      {flashcards.length > 0 && <Flashcards cards={flashcards} />}
    </div>
  );
};

export default UploadFile;
