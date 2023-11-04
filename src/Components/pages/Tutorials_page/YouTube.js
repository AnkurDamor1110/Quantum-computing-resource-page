import React from 'react';
import YoutubeData from '../../../Data/Tutorial/Youtube_data'; // Import the data
import './YouTube.css'; // You can create a CSS file for styling

const YoutubeCards = () => {
  return (
    <div className="company">
    <div className="youtube-cards">
      {YoutubeData.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.type}</h2>
          <div className="You-cards">
            {category.content.map((video, videoIndex) => (
              <div key={videoIndex} className="You-card">
                <h3>{video['Title']}</h3>
                <p>Channel: {video['channel']}</p>
                <a href={video.URL} target="_blank" rel="noopener noreferrer">
                  Watch Video
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

export default YoutubeCards;
