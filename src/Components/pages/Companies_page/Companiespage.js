import React from 'react';
import companies from '../../../Data/Companies_data'; // Import the data from data.js
import './companies.css';
const Companies = () => {
  return (
    <div className='company'>
      {companies.map((company, index) => (
        <div key={index}>
          <h2>{company.name}</h2>
          <a href={company.link} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
          <hr
         style={{
          background: 'blue', 
          color: 'blue',
          borderColor: 'blue',
          height: '3px',
          width: '100%',
        }}
      />
        </div>
      ))}
    </div>
  );
};

export default Companies;
