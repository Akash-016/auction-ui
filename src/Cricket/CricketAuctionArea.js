import React, { useState } from 'react';
import loading from '../External/galaxy-6141_512.gif';
import backPlayer from '../External/back_player.png';
import bid from '../External/bid.png';
// Material UI Icons
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Bid icon
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Skip icon
import '../App.css';
import { useNavigate, useLocation } from 'react-router-dom';

const StartEndButton = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [img, setImg] = useState(false);
  const [teamCount, setTeamCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true); // Toggle based on user role
  const [activeTeamIndex, setactiveTeamIndex] = useState(7)
  const [visible, setVisible] = useState(true);
  const [copyStatus, setCopyStatus] = useState(false); // State to track copy status
  const location = useLocation();
  const navigate = useNavigate();

  const { id, pass } = location.state? location.state:navigate("/cricket-auction")
  
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

  const handleClick = () => {
    setIsStarted(!isStarted);
    setImg(true);
  };

  const handleSkip = () => {
    console.log("Skip button clicked");
    // Add your skip logic here
  };

  const handleBid = () => {
    console.log("Bid button clicked for Team");
    setIsAnimating(true);

    // Reset animation after 1 second
    setTimeout(() => {
      setIsAnimating(false);
      // Add your bid logic here
    }, 1000);
  };

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#8E44AD', '#E67E22', '#2ECC71', '#1ABC9C'];

  return (
    <div style={{
      position: 'relative',
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#222641',
      height: '100%',
      justifyContent: 'space-between'
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
        margin: '0 auto',
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
                  height: '40px',
                }}
              >
                <div style={{
                  backgroundColor: 'black',
                  color: 'white',
                  flex: '1',
                  padding: '10px',
                  textAlign: 'center',
                  lineHeight: '20px',
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
                  lineHeight: '20px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  fontSize: '0.9em',
                }}>
                  {info.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Base Price Info Row */}
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

      {/* Admin or Player Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '109px',
        width: '700px',
      }}>
        {isAdmin ? (
          <>
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
            {/* Unsold Button */}
            <button style={{
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <CancelIcon style={{ marginRight: '10px' }} />
              Unsold
            </button>

            {/* Sold Button */}
            <button style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <CheckCircleIcon style={{ marginRight: '10px' }} />
              Sold
            </button>

            {/* Next Button */}
            <button style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <ArrowForwardIcon style={{ marginRight: '10px' }} />
              Next
            </button>

          </>
        ) : (
          <>
            {/* Skip Button */}
            <button style={{
              backgroundColor: 'orange',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onClick={handleSkip}
            >
              <ArrowBackIcon style={{ marginRight: '10px' }} />
              Skip
            </button>

            {/* Bid Button */}
            <button style={{
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              onClick={handleBid}
            >
              <AttachMoneyIcon style={{ marginRight: '10px' }} />
              Bid
            </button>
          </>
        )}
      </div>

      {/* Teams Area */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${teamCount}, 1fr)`,
        gridGap: '2px',
        width: '100%',
        height: '100px',
        backgroundColor: '#222641',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        {[...Array(teamCount)].map((_, index) => (
          <div key={index} style={{
            backgroundColor: colors[index % colors.length],
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: 'white',
            fontWeight: 'bold',
            position: 'relative',  // To position the image absolutely inside the div
          }}>
            Team {index + 1}

            {/* Image with opacity 0 */}
            <img
              src={bid}
              alt={`Team ${index + 1}`}
              style={{
                position: 'absolute',
                top: isAnimating && activeTeamIndex - 1 === index ? '-100px' : '0',  // Move up when animating
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: activeTeamIndex - 1 === index ? (isAnimating ? 1 : 0) : 0,  // Show image if it's the active team
                zIndex: 1,
                transition: 'opacity 0.3s ease, top 0.5s ease',  // Smooth transition for opacity and movement
              }}
            />
          </div>
        ))}
      </div>


      {/* Start/End Button or Remaining Amount for Players */}
      <div style={{ position: 'absolute', top: 5, right: 5 }}>
        {isAdmin ? (
          <button
            onClick={handleClick}
            style={{
              backgroundColor: isStarted ? 'red' : 'green',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            {isStarted ? 'End' : 'Start'}
          </button>
        ) : (
          <div style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold',
          }}>
            rem amt: 80C
          </div>
        )}
      </div>
    </div>
  );
};

export default StartEndButton;
