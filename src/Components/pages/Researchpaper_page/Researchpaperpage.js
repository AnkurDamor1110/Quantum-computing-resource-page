import React from 'react';
import paperData from '../../../Data/Researchpaper/Researchpaper_data'; // Update the import path as needed
import './Researchpaper.css';
const PaperCard = () => {
  return (
    <div className="company">
      {paperData.map((paper, index) => (
        <div className="paper-card" key={index}>
          <h2>{paper.title}</h2>
          <p>Author: {paper.author}</p>
          <p>Published Date: {paper.publishedDate}</p>
          <a href={paper.link} target="_blank" rel="noopener noreferrer">
            Read Paper
          </a>
        </div>
      ))}
    </div>
  );
};

export default PaperCard;
