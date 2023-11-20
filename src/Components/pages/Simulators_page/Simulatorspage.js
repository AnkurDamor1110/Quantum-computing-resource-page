import React, { useState } from 'react';
import simulatorsByLanguage from '../../../Data/Simulators/Simulators_data';
import './simulatorspage.css';

const Simulator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(simulatorsByLanguage[0].language); // Open the first language initially

  const toggleLanguage = (language) => {
    if (selectedLanguage === language) {
      // Clicked the same language again, so clear the selection
      setSelectedLanguage(null);
    } else {
      setSelectedLanguage(language);
    }
  };

  return (
    <div className="company">
      <div className="simulator-page">
        {simulatorsByLanguage.map((languageGroup, index) => (
          <div key={index} className="year-card">
            <div className="year-header" onClick={() => toggleLanguage(languageGroup.language)}>
              <h2>{languageGroup.language}</h2>
              <i className={`fa ${selectedLanguage === languageGroup.language ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
            </div>
            {selectedLanguage === languageGroup.language && (
              <div className="simulator-container">
                {languageGroup.simulators.map((simulator, index) => (
                  <div key={index} className="simulator-card ">
                    <h2 className="workshop-name">{simulator.name}</h2>
                    <a href={simulator.url} target="_blank" rel="noopener noreferrer">
                      Visit Simulator
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

export default Simulator;
