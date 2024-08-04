import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/background.jpg'; // Adjust the path as necessary

const Header = () => {
  // CSS for various animations
  const animations = `
    @keyframes borderBlink {
      0% { border-color: rgba(255, 255, 255, 0.8); }
      50% { border-color: transparent; }
      100% { border-color: rgba(255, 255, 255, 0.8); }
    }

    @keyframes glow {
      0% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.8); }
      50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
      100% { text-shadow: 0 0 5px rgba(255, 255, 255, 0.8); }
    }

    @keyframes backgroundPulse {
      0% { background-color: rgba(0, 0, 0, 0.5); }
      50% { background-color: rgba(0, 0, 0, 0.7); }
      100% { background-color: rgba(0, 0, 0, 0.5); }
    }
  `;

  return (
    <div 
      style={{
        minHeight: '100vh', // Set to 100vh to cover the entire viewport height
        display: 'flex',
        flexDirection: 'column', // Ensure column layout
        justifyContent: 'center',
        alignItems: 'center', // Center horizontally
        gap: '1rem', // Adjust spacing as needed
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat',
        textAlign: 'center', // Center text
        padding: '2rem', // Add padding to container
        animation: 'backgroundPulse 4s infinite', // Apply pulsing background effect
      }}
    >
      <style>{animations}</style> {/* Add the keyframe animations here */}
      <Container>
        <Row>
          <Col>
            <div style={{
              border: '2px solid rgba(255, 255, 255, 0.8)', // Add border
              padding: '2rem',
              borderRadius: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
              display: 'inline-block', // Ensure width fits content
              // Remove pulse animation from here
            }}>
              <h1 style={{ 
                fontWeight: '700',
                color: '#fff',
                fontSize: '3rem', // Increase font size
                marginBottom: '1rem', // Adjusted margin
                animation: 'glow 1.5s infinite' // Apply glowing text effect
              }}>
                Configuring Success: Streamlined Vehicle Solutions for Enterprises
              </h1>
              <p style={{ 
                lineHeight: '1.6',
                color: '#fff',
                fontSize: '1.25rem', // Increase font size for paragraph
              }}>
                Proudly serving over 500 delighted clients who place their trust in our expertise.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
