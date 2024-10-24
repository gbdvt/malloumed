import React, { useState } from 'react';
import './Notes.css';

const Notes = () => {
  const [transcriptions, setTranscriptions] = useState([
    {
      id: 1,
      title: 'Inglés Médico',
      date: 'October 23, 2024',
      summary: 'Summary of Inglés Médico lecture...'
    },
    {
      id: 2,
      title: 'Anatomía',
      date: 'October 23, 2024',
      summary: 'Summary of Anatomía lecture...'
    },
    {
      id: 3,
      title: 'Biología',
      date: 'October 23, 2024',
      summary: 'Summary of Biología lecture...'
    },
  ]);

  return (
    <div className="notes-container">
      <h1>Your Lecture Notes</h1>
      <div className="timeline">
        {transcriptions.map((transcription) => (
          <div key={transcription.id} className="timeline-item">
            <div className="timeline-content">
              <h2>{transcription.title}</h2>
              <p className="date">{transcription.date}</p>
              <p>{transcription.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
