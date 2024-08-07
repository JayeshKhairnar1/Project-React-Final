import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Configure1 = () => {
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [components, setComponents] = useState([]);
  const [componentsLoading, setComponentsLoading] = useState(true);
  const [componentsError, setComponentsError] = useState(null);
  const [priceData, setPriceData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const modelId = location.state?.modelId;
  const quantity = location.state?.quantity;

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/cars/${modelId}`);
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

    if (modelId) {
      fetchCarData();
    }
  }, [modelId]);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/models/details/${modelId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPriceData(data.price);
      } catch (err) {
        setError('Error fetching price data');
      }
    };

    if (modelId) {
      fetchPriceData();
    }
  }, [modelId]);

  const fetchItems = async (category) => {
    let urls = [];
    if (category === 'S') {
      urls = [
        `http://localhost:8080/api/vehicles/S/${modelId}`,
        `http://localhost:8080/api/vehicles/I/${modelId}`,
        `http://localhost:8080/api/vehicles/E/${modelId}`
      ];
    } else {
      urls = [`http://localhost:8080/api/vehicles/${category}/${modelId}`];
    }

    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json())); // Fixed the typo here
      const combinedData = data.flat(); // Combine all fetched data into one array
      setComponents(combinedData);
    } catch (err) {
      setComponentsError('Error fetching components');
    } finally {
      setComponentsLoading(false);
    }
  };

  useEffect(() => {
    fetchItems('S'); // Replace 'S' with the category you need to fetch
  }, [modelId]);

  const buttonStyle = {
    margin: '0 5px',
    padding: '5px 10px',
    backgroundColor: 'yellow',
    border: 'none',
    color: 'black',
    fontWeight: 'bold'
  };

  const containerStyle = {
    marginTop: '10px',
    position: 'relative'
  };

  const boxStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7f0ff', // Light blue color for all boxes
    marginBottom: '10px' // Ensure spacing between boxes
  };

  const priceBoxStyle = {
    marginTop: '10px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#e7f0ff', // Light blue color for the price box
    color: '#333',
    fontWeight: 'bold',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  const cardStyle = (isConfigurable) => ({
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
    backgroundColor: isConfigurable ? '#d4edda' : '#f8f9fa', // Light green for configurable, light gray for non-configurable
    border: '1px solid #ddd',
    borderRadius: '5px',
    minWidth: '100px'
  });

  const componentListStyle = {
    ...boxStyle,
    minHeight: '200px',
    backgroundColor: '#f8f9fa',
    padding: '10px',
    overflowY: 'auto',
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333'
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col md={3}>
          <div>
            <h5 style={titleStyle}>Description</h5>
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
          </div>
          <div>
            <h5 style={titleStyle}>Standard Components</h5>
            <div style={boxStyle}>
              {componentsLoading ? (
                <p>Loading components...</p>
              ) : componentsError ? (
                <p>{componentsError}</p>
              ) : components.length > 0 ? (
                <ul style={listStyle}>
                  {components.map(component => (
                    <li key={component.comp_id}>{component.comp_name}</li>
                  ))}
                </ul>
              ) : (
                <p>No components available</p>
              )}
            </div>
          </div>
        </Col>
        <Col md={9}>
          {carData ? (
            <img 
              src={`${process.env.PUBLIC_URL}${carData.path}`} // Convert path for correct rendering
              alt={carData.carName} 
              style={imageStyle} 
            />
          ) : (
            <p>No image available</p>
          )}
          {priceData && quantity && (
            <div style={priceBoxStyle}>
              Base Price: ₹{priceData} x {quantity} = ₹{priceData * quantity}
            </div>
          )}
        </Col>
      </Row>
      <Row className="mt-2">
        <Col className="d-flex justify-content-center">
          <Button style={buttonStyle} onClick={() => navigate('/confirmorder1', { state: { modelId, quantity, price: priceData } })}>Confirm Order</Button>
          <Button style={buttonStyle} onClick={() => navigate('/configure2', { state: { modelId } })}>Configure</Button>
          <Button style={buttonStyle} onClick={() => navigate('/dropdownPage', { state: { modelId } })}>Modify</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Configure1;
