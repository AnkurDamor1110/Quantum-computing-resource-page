import React from 'react';
import simulatorsByLanguage from '../../../Data/Simulators/Simulators_data'; // Import the new data structure
import './simulatorspage.css';

const Simulator = () => {
  return (
    <div className="company">
    <div className="simulator-page">
      {simulatorsByLanguage.map((languageGroup, index) => (
        <div key={index} className='language-section'>
          <h2>{languageGroup.language}</h2>
          <div className='simulator-container'>
            {languageGroup.simulators.map((simulator, index) => (
              <div key={index} className='simulator-card'>
                <h2>{simulator.name}</h2>
                <a href={simulator.url} target="_blank" rel="noopener noreferrer">
                  Visit Simulator
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
