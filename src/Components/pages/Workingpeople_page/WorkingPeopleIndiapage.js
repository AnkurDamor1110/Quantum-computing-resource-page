// TopicCard.js
import React from 'react';
import workingPeopleData from '../../../Data/WorkingPeople/WorkingPeopleIndia_data';
// import './workingpeopleindiapage.css'

const WorkingPeopleIndia = () => {
    return (
        <div className="company">
      <div className="working-people-page">
        {workingPeopleData.map((category, index) => (
          <div key={index} className="category-section">
            <h2>{category.topic}</h2>
            <div className="people-container">
              {category.people.map((person, index) => (
                <div key={index} className="person-card">
                  <h3>Name: {person.name}</h3>
                  <p>Institute: {person.institute}</p>
                  <a href={person.url} target="_blank" rel="noopener noreferrer">
                    Visit Profile
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

export default WorkingPeopleIndia;
