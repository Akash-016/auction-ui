import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [gridItems, setGridItems] = useState([...Array(140)]); // Example array

  // Dynamically calculate the number of columns based on array size
  const numColumns = Math.min(gridItems.length, 6); // Max 6 columns, you can adjust this

  return (
    <div className="container">
      <div className="main-image">
        <div className="image-placeholder">Main Image</div>
      </div>
      <div className="end-button">
        <button>End</button>
      </div>
      <div className="secondary-images">
        <div className="image-box"></div>
        <div className="image-box"></div>
      </div>
      <div className="controls">
        <button>Warning</button>
        <button>Sold</button>
        <button>Next</button>
      </div>
      <div
        className="grid-gallery"
        style={{
          gridTemplateColumns: `repeat(${numColumns}, 1fr)`
        }}
      >
        {gridItems.map((_, index) => (
          <div className="grid-item" key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default App;
