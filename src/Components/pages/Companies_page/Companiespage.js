import React from 'react';
import companies from '../../../Data/Companies_data'; // Import the data from data.js
import './companies.css';
const Companies = () => {
  return (
    <div className='company'>
      
      {companies.map((companyGroup, index) => (
        <div key={index}>
          <h2>{companyGroup.company_type}</h2>
          <div className="company-container">
          {companyGroup.company.map((company, innerIndex) => (
            <div key={innerIndex} className='company-card'>
              <h3>{company.name}</h3>
              {/* <p>{company.details}</p> */}
              <a href={company.url} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          ))}
        </div>
        </div>
      ))}
      
    </div>
  );
};

export default Companies;
