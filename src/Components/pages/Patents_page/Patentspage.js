import React from 'react';
import patents from "../../../Data/Patents/Patents_data";
import './patents.css';

const PatentCards = () => {
    return (
        <div className="company">
      <div className="patent-cards">
        {patents.map((patent, index) => (
          <div key={index} className="patent-card">
            <h2>{patent.Title}</h2>
            <p>
              <strong>Investor(s):</strong> {patent.Investor}
            </p>
            <a href={patent.URL} target="_blank" rel="noopener noreferrer">
              View Patent
            </a>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
export default PatentCards;