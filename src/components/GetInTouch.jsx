import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <Container 
            fluid 
            style={{
                paddingTop: '3rem', // Increased padding-top
                paddingBottom: '2.5rem', // Adjusted padding-bottom
                backgroundColor: '#fff9c4', // Light yellow background color
                borderRadius: '0.5rem',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '2rem', // Added margin-bottom for white space after the container
                paddingLeft: '2rem',
                paddingRight: '2rem'
            }}
        >
            <Row className="justify-content-center text-center">
                <Col xs={12} md={8} lg={6}>
                    <h1 style={{ marginBottom: '1.5rem' }}>
                        Get in Touch
                    </h1>
                    <p style={{ 
                        maxWidth: '500px', 
                        margin: '0 auto 1.5rem auto',
                        lineHeight: '1.5', 
                        color: '#515151' 
                    }}>
                        We are here to assist you in customizing and personalizing your dream vehicle. Our team is committed to ensuring a professional and enjoyable experience for you. If you have any questions, need assistance, or want to start configuring your vehicle, click the button below to get in touch with us.
                    </p>
                    <Button 
                        as={Link}
                        to={'/contact'}
                        variant="dark" // Updated button color to dark blue
                        style={{ 
                            fontSize: '0.9rem',
                            textTransform: 'capitalize', 
                            padding: '0.5rem 2rem',
                            borderRadius: '20px', // Rounded edges
                            backgroundColor: '#14192d',
                            borderColor: '#14192d',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1e2a5a'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#14192d'}
                    >
                        Get in Touch
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default GetInTouch;
