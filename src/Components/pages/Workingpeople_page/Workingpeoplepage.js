import React from 'react';
import peopleData from '../../../Data/WorkingPeople/WorkingPeople_data'; // Import the people data from data.js
import './workingpeople.css'; // You can create a CSS file for styling

const WorkingPeople = () => {
  return (
    <div className="company">
    <div className='people-container'>
      {peopleData.map((person, index) => (
        <div key={index} className='person-card'>
          <h2>Name: {person.name}</h2>
          <p>Institute: {person.institute}</p>
          <a href={person.link} target="_blank" rel="noopener noreferrer">
            Visit Profile
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WorkingPeople;
