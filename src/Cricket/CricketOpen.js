import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { useNavigate } from 'react-router-dom';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import BgVideo from '../External/cricket_background.mp4';

export default function Cricket() {
    const [selectedSport, setSelectedSport] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSelectedSport(event.target.value);
    };

    function handleBack() {
        navigate("/cricket-auction");
    }
    function handleData() {
        if (selectedSport === 'Cricket') {
            navigate("/cricket-auction-data")
        }
    }
    return (
        <div className='Main'>
            <video autoPlay loop muted className="bg-vid">
                <source src={BgVideo} type="video/mp4" />
            </video>
            <div className="App-box1">
                <h1>BidBuzz</h1>
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
                            disabled
                        />
                        Own-Data
                    </label>
                </div>
                <div>
                    <Button variant="secondary" onClick={handleData}>
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
