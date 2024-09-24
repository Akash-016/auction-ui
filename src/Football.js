import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { useNavigate } from 'react-router-dom';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

export default function Cricket() {
  const [selectedSport, setSelectedSport] = useState('');
  const handleChange = (event) => {
    setSelectedSport(event.target.value);
  };
  const navigate = useNavigate();

  function handleBack() {
    navigate("/"); // Navigate back to the main page
  }
  return (
    <div className='Main1'>
      <div className="App-box2">
        <h1>BidBuzz</h1>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="Football"
              checked={selectedSport === 'Football'}
              onChange={handleChange}
            />
            BidBizz-data
          </label>
          <label>
            <input
              type="radio"
              value="OwnDataSet"
              checked={selectedSport === 'OwnDataSet'}
              onChange={handleChange}
              disabled
            />
            Own-Data
          </label>
        </div>
        <div>
          <Button variant="secondary" >
            <Fingerprint />
          </Button>
          <Button variant="secondary" onClick={handleBack}>
            <ClearSharpIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
