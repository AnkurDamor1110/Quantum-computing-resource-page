import React from 'react';
import topicsData from '../../../Data/Articles/Articles_data'; // Import the topics' data from data.js
import './article.css'; // You can create a CSS file for styling

const Articlespage = () => {
  return (
    <div className="company">
    <div className='topic-container'>
      {topicsData.map((topic, index) => (
        <div key={index} className='topic-card'>
          <h2>{topic.topicName}</h2>
          <p>Author: {topic.authorName}</p>
          <a href={topic.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Articlespage;
