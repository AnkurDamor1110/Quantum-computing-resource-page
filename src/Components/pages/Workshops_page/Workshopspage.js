import React from 'react';
import WorkshopsData from '../../../Data/Workshops/Workshops_data'; // Import your workshop data
import './workshops.css'; // Import your CSS file

const Workshops = () => {
  return (
    <div className="company">
    <div className="workshops-container">
      {WorkshopsData.map((workshop, index) => (
        <div key={index} className="workshop-card">
          <h2 className="workshop-name">{workshop.eventName}</h2>
          <p className="workshop-organization">Organization: {workshop.organization}</p>
          <a className="workshop-link" href={workshop.link} target="_blank" rel="noopener noreferrer">
            Watch Workshop
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Workshops;
