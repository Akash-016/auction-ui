import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { useNavigate } from 'react-router-dom';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';

export default function Cricket() {
    const [selectedSport, setSelectedSport] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedSport(event.target.value);
    };

    function handleBack() {
        navigate("/"); // Navigate back to the main page
    }

    return (
        <div className='Main'>
            <div className="App-box1">
                <h1>BidBizz</h1>
                <div className="radio-group">
                    <label>
                        <input
                            type="radio"
                            value="Cricket"
                            checked={selectedSport === 'Cricket'}
                            onChange={handleChange}
                        />
                        BidBizz-Data
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="OwnDataSet"
                            checked={selectedSport === 'OwnDataSet'}
                            onChange={handleChange}
                        />
                        Own-Data
                    </label>
                </div>
                <div>
                    <Button variant="secondary">
                        <Fingerprint />
                    </Button>
                    <Button variant="secondary" onClick={handleBack}>
                        <ClearSharpIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
