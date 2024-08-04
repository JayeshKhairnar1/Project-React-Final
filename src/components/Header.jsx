import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/background.jpg'; // Adjust the path as necessary

const Header = () => {
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
            }}
        >
            <Container>
                <Row>
                    <Col>
                        <h1 style={{ 
                            fontWeight: '700',
                            color: '#fff',
                            marginBottom: '0.5rem', // Adjusted margin
                        }}>
                            Let's configure your vehicle with us
                        </h1>
                        <p style={{ 
                            lineHeight: '1.6',
                            color: '#fff',
                        }}>
                            Served 500+ happy customers who trust in our service.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
