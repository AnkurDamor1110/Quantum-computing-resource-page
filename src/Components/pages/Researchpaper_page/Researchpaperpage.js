import React from 'react';
import papperData from '../../../Data/Researchpaper/Researchpaper_data'; // Import the new data structure
import './Researchpaper.css';


const Simulator = () => {
  return (
    <div className="company">
    <div className="simulator-page">
      {papperData.map((languageGroup, index) => (
        <div key={index} className='language-section'>
          <h2>{languageGroup.year}</h2>
          <div className='simulator-container'>
            {languageGroup.pappers.map((simulator, index) => (
              <div key={index} className='paper-card'>
                <h2>Title:{simulator.Title}</h2>
                <h4> Author:{simulator.Author}</h4>
                <a href={simulator.URL} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Simulator;
