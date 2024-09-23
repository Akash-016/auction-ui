import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import BgVideo from './External/4932714_Person_People_3840x2160.mp4';
import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Cricket from './Cricket'; // Adjust the path as necessary
import Football from './Football'

function App() {
  const [selectedSport, setSelectedSport] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedSport(event.target.value);
  };

  const handleButtonClick = () => {
    if (selectedSport === 'Cricket') {
      navigate('/cricket-auction');
    } else if (selectedSport === 'Football') {
      navigate('/football-auction');
    }
  };

  return (
    <div className="App">
      <div className="App-body">
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <div className="App-box">
          <h1>BidBizz</h1>
          <h5>Aim, Bid, Win!</h5>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="Cricket"
                checked={selectedSport === 'Cricket'}
                onChange={handleChange}
              />
              Cricket
            </label>
            <label>
              <input
                type="radio"
                value="Football"
                checked={selectedSport === 'Football'}
                onChange={handleChange}
              />
              Football
            </label>
          </div>
          <div>
            <Button variant="secondary" onClick={handleButtonClick}>
              <Fingerprint />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Router Component
const Main = () => (
  <Router>
    <Routes>
      <Route path="/cricket-auction" element={<Cricket />} />
      <Route path="/football-auction" element={<Football />} />
      <Route path="/" element={<App />} />
    </Routes>
  </Router>
);

export default Main;
