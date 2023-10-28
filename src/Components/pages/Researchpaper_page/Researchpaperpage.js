// PaperCard.js
import React from 'react';
import paperData from '../../../Data/Researchpaper/Researchpaper_data';
import './Researchpaper.css';
const PaperCard = () => {
  return (
    <div className="company">
    <div className="paper-card">
      <h2>{paperData.title}</h2>
      <p>Author: {paperData.author}</p>
      <p>Published Date: {paperData.publishedDate}</p>
      <a href={paperData.link} target="_blank" rel="noopener noreferrer">
        Read Paper
      </a>
    </div>
    </div>
  );
};

export default PaperCard;
