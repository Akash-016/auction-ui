import React, { useState } from 'react';
import '../App.css'; // Import your CSS for styling
import { useLocation } from 'react-router-dom';

export default function CricketAuctionArea() {
  const [visible, setVisible] = useState(true);
  const [copyStatus, setCopyStatus] = useState(false); // State to track copy status
  const location = useLocation();
  const { id, pass } = location.state || {};
  const url = `https://localhost:3000/join?id=${id}&pass=${pass}`; // The URL to copy

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopyStatus(true); // Set the copy status to true
    setTimeout(() => {
      setCopyStatus(false); // Reset copy status after 2 min
    }, 20000);
  };

  const handleCancel = () => {
    setVisible(false); // Close the pop-up immediately
  };

  return (
    <div className="auction-area">
      {visible && (
        <div className="popup-box">
          <button onClick={handleCancel} className="cancel-button">✖</button>
          <div className="area-name">Cricket Auction Area</div>
          <div className="link-text">Room Id: {id}</div>
          <div className="link-text">Room Password: {pass}</div>
          <div className="link-text">Join Link: {url}</div>
          <div className="button-group">
            <button 
              onClick={handleCopy} 
              className={`copy-button ${copyStatus ? 'copied' : ''}`} // Add a class based on copy status
            >
              {copyStatus ? 'Copied!' : 'Copy URL'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
