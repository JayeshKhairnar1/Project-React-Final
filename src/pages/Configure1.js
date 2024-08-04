import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';

const Configure1 = () => {
  const features = [
    { name: 'Engine', description: 'V8 engine with turbo' },
    { name: 'Transmission', description: '8-speed automatic' },
    { name: 'Brakes', description: 'ABS with EBD' },
    { name: 'Tires', description: 'All-season tires' },
    { name: 'Seats', description: 'Leather seats' },
    { name: 'Sound System', description: 'Premium surround sound' },
    { name: 'Navigation', description: 'GPS with real-time traffic' },
    { name: 'Air Conditioning', description: 'Dual-zone automatic climate control' }
  ];

  const buttonStyle = {
    margin: '0 10px',
    padding: '10px 20px',
    backgroundColor: 'yellow',
    border: 'none',
    color: 'black',
    fontWeight: 'bold'
  };

  const containerStyle = {
    marginTop: '20px'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const updateCardHeight = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.clientHeight);
      }
    };

    updateCardHeight();

    window.addEventListener('resize', updateCardHeight);
    return () => window.removeEventListener('resize', updateCardHeight);
  }, []);

  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={6}>
          <Card ref={cardRef}>
            <Card.Header>Car Features</Card.Header>
            <ListGroup variant="flush">
              {features.map((feature, index) => (
                <ListGroup.Item key={index}>
                  <strong>{feature.name}:</strong> {feature.description}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
        <Col md={6}>
          <div style={{ ...imageContainerStyle, height: cardHeight }}>
            <img 
              src="https://via.placeholder.com/400x300.png?text=Car+Image+Placeholder" 
              alt="Car Placeholder" 
              style={imageStyle} 
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="d-flex justify-content-center">
          <Button style={buttonStyle} onClick={() => navigate('/confirmorder')}>Confirm Order</Button>
          <Button style={buttonStyle} onClick={() => navigate('/configure2')}>Configure</Button>
          <Button style={buttonStyle} onClick={() => navigate('/dropdownPage')}>Modify</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Configure1;
