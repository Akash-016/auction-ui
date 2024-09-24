import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { useNavigate } from 'react-router-dom';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import BgVideo from '../External/cricket_background.mp4';
import TextField from '@mui/material/TextField';

export default function Cricket() {
    const [id, setid] = useState('');
    const [pass, setpass] = useState('');

    const navigate = useNavigate();


    function handleBack() {
        navigate("/cricket-auction"); // Navigate back to the main page
    }

    function submit(){

    }
    const handleAuctionRoomIdChange = (event) => {
        setid(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setpass(event.target.value);
    };

    return (
        <div className='Main'>
            <video autoPlay loop muted className="bg-vid">
                <source src={BgVideo} type="video/mp4" />
            </video>
            <div className="App-box-data">
                <h1>BidBuzz</h1>
                <TextField
                     id="auction-room-id"
                     helperText="Enter auction room id"
                     variant="standard"
                     value={id}
                     onChange={handleAuctionRoomIdChange}
                    sx={{
                        m: 1, width: '18ch',
                        input: { color: 'white' }, // Input text color
                        '.MuiInputLabel-root': { color: 'white' }, // Label text color
                        '.MuiFormHelperText-root': { color: 'white' }, // Helper text color
                        '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Default border color
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' }, // Hover border color
                        '& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Focused border color
                        '& .MuiSelect-icon': { color: 'white' },//dropdown white
                    }}
                >
                </TextField>
                <TextField
                     id="auction-password"
                     helperText="Enter password"
                     variant="standard"
                     type={'password'}
                     value={pass}
                     onChange={handlePasswordChange}
                    sx={{
                        m: 1, width: '18ch',
                        input: { color: 'white' }, // Input text color
                        '.MuiInputLabel-root': { color: 'white' }, // Label text color
                        '.MuiFormHelperText-root': { color: 'white' }, // Helper text color
                        '& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Default border color
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' }, // Hover border color
                        '& .MuiInput-underline:after': { borderBottomColor: 'white' }, // Focused border color
                        '& .MuiSelect-icon': { color: 'white' },//dropdown white
                    }}
                        
                >
                </TextField>
                <div>
                    <Button variant="secondary" onClick={submit}>
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
