import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Configure1 = () => {
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const modelId=
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cars/{modelId}'); // Adjust endpoint as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCarData(data);
      } catch (err) {
        setError('Error fetching car data');
      } finally {
        setLoading(false);
      }
    };

    fetchCarData();
  }, []);

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

  const boxStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    minHeight: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={6}>
          <div style={boxStyle}>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : carData ? (
              <p>{carData.description}</p>
            ) : (
              <p>No data available</p>
            )}
          </div>
        </Col>
        <Col md={6}>
          <div style={boxStyle}>
            {carData ? (
              <img 
                src={`${process.env.PUBLIC_URL}${carData.path}`} // Convert path for correct rendering
                alt={carData.carName} 
                style={imageStyle} 
              />
            ) : (
              <p>No image available</p>
            )}
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
