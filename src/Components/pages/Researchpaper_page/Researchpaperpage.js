import React, { useState } from 'react';
import papperData from '../../../Data/Researchpaper/Researchpaper_data'; // Import the data structure
import './Researchpaper.css';

const ResearchPapers = () => {
  const [selectedYear, setSelectedYear] = useState(papperData[0].year); // Open the first year initially

  const toggleYear = (year) => {
    if (selectedYear === year) {
      // Clicked the same year again, so clear the selection
      setSelectedYear(null);
    } else {
      setSelectedYear(year);
    }
  };

  return (
    <div className="company">
      <div className="research-paper-page">
        {papperData.map((yearGroup, index) => (
          <div key={index} className="year-card">
            <div className="year-header" onClick={() => toggleYear(yearGroup.year)}>
              <h2>{yearGroup.year}</h2>
              <i className={`fa ${selectedYear === yearGroup.year ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
            </div>
            {selectedYear === yearGroup.year && (
              <div className="paper-container">
                {yearGroup.pappers.map((paper, index) => (
                  <div key={index} className="paper-card">
                    <h2 className="workshop-name">Title: {paper.Title}</h2>
                    <h4 className="workshop-organization">Author: {paper.Author}</h4>
                    <a href={paper.URL} target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPapers;
