import React, { useState } from 'react';
import loading from '../External/galaxy-6141_512.gif';
import backPlayer from '../External/back_player.png';

const StartEndButton = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [img, setImg] = useState(false);
  const [teamCount, setTeamCount] = useState(10);

  const handleClick = () => {
    setIsStarted(!isStarted);
    setImg(true);
  };
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E67E22', '#2ECC71', '#1ABC9C']; // Add more colors as needed
  return (
    <div style={{
      position: 'relative',
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: '#222641',
      height: '100%',
      justifyContent: 'space-between' // Ensure team space sticks to the bottom

    }}>
      {/* Container for Photo Frame and Info Box */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '2px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        width: '700px',
        height: '370px',
        backgroundColor: 'grey',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          {/* Photo Frame */}
          <div
            style={{
              width: '300px',
              height: '300px',
              borderRadius: '10px',
              overflow: 'hidden',
              margin: '5px',
              backgroundImage: `url(${backPlayer})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <img
              src={!img ? loading : "https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png"}
              alt="Photo Frame"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Info Box */}
          <div
            style={{
              width: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              padding: '10px',
              marginTop: '5px',
            }}
          >
            {/* Individual Info Rows */}
            {[
              { attribute: 'Name', value: 'Mahendra Singh Dhoni' },
              { attribute: 'Role', value: 'Wicket-keeper-batter' },
              { attribute: 'Team', value: 'Chennai Super Kings' },
              { attribute: 'Matches', value: '350' },
              { attribute: 'Runs', value: '10,773' },
            ].map((info, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  width: '130%',
                  marginBottom: '35px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  height: '40px', // Fixed height for each info row
                }}
              >
                <div style={{
                  backgroundColor: 'black',
                  color: 'white',
                  flex: '1',
                  padding: '10px',
                  textAlign: 'center',
                  lineHeight: '20px', // Center text vertically
                }}>
                  <strong>{info.attribute}</strong>
                </div>
                <div style={{
                  backgroundColor: 'lightgreen',
                  color: 'black',
                  flex: '1',
                  padding: '10px',
                  textAlign: 'center',
                  marginRight: '40px',
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                  lineHeight: '20px', // Center text vertically
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap', // Prevent wrapping
                  fontSize: '0.9em', // Optional: Adjust font size if needed
                }}>
                  {info.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Base Price Info Row (below the photo frame) */}
        <div style={{
          display: 'flex',
          width: '40%',
          height: '40px',
          marginTop: '-85px',
          borderRadius: '8px',
          overflow: 'hidden',
          marginLeft: '16px',
        }}>
          <div style={{
            backgroundColor: 'black',
            color: 'white',
            flex: '1',
            padding: '10px',
            textAlign: 'center',
          }}>
            <strong>Base Price</strong>
          </div>
          <div style={{
            backgroundColor: 'lightgreen',
            color: 'black',
            flex: '1',
            padding: '10px',
            textAlign: 'center',
          }}>
            200
          </div>
        </div>
      </div>

      {/* Space between top container and team space */}
      <div style={{ height: '109px' }}></div> {/* This adds some space between the containers */}


      {/* Teams Area - Fixed to be 20px from bottom */}



      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${teamCount}, 1fr)`,  // Creates 'teamCount' number of equal-width columns
        gridGap: '2px',  // Reduced gap between team blocks
        width: '100%',
        height: '100px', // Fixed height for the team space
        backgroundColor: '#222641',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        {[...Array(teamCount)].map((_, index) => (
          <div key={index} style={{
            backgroundColor: colors[index % colors.length], // Cycle through colors based on index
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%', // Ensure each div takes up full height
            color: 'white', // Optional: Set text color for better visibility
            fontWeight: 'bold', // Optional: Make text bold
          }}>
            Team {index + 1} {/* Optional: Add team number or name */}
          </div>
        ))}
      </div>



      {/* Start/End Button */}
      <div style={{ position: 'absolute', top: 5, right: 5 }}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: isStarted ? 'red' : 'green',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            position: 'relative',
            transition: 'background-color 0.3s ease',
          }}
        >
          {isStarted ? 'End' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default StartEndButton;
