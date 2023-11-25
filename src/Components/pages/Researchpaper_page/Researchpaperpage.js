import React, { useState } from 'react';
import papperData from '../../../Data/Researchpaper/Researchpaper_data'; // Import the data structure
import './Researchpaper.css';

const ResearchPapers = () => {
  const years = papperData.map((yearGroup) => yearGroup.year); // Extract years from data
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const toggleYear = (year) => {
    setSelectedYear(selectedYear === year ? null : year);
  };

  return (
    <div className="company">
      <div className="research-paper-page">
        <div className="year-selection">
          {years.map((year, index) => (
            <div
              key={index}
              className={`year-button ${selectedYear === year ? 'selected' : ''}`}
              onClick={() => toggleYear(year)}
            >
              {year}
            </div>
          ))}
        </div>
        {selectedYear && (
          <div className="paper-container">
            {papperData
              .find((yearGroup) => yearGroup.year === selectedYear)
              .pappers.map((paper, index) => (
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
    </div>
  );
};

export default ResearchPapers;
