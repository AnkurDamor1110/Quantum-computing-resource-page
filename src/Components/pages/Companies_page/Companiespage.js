import React, { useState } from 'react';
import companies from '../../../Data/Companies_data';
import './companies.css';

const Companies = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className='company'>
      {companies.map((companyGroup, index) => (
        <div key={index}>
          <h2
            className={selectedType === companyGroup.company_type ? 'active' : ''}
            onClick={() => handleTypeClick(companyGroup.company_type)}
          >
            {companyGroup.company_type}
          </h2>
          <div className={`company-container ${selectedType === companyGroup.company_type ? 'show' : ''}`}>
            {companyGroup.company.map((company, innerIndex) => (
              <div key={innerIndex} className='company-card'>
                <h3>{company.name}</h3>
                <a href={company.url} target='_blank' rel='noopener noreferrer'>
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
