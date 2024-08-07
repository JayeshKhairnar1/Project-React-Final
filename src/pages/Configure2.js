import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Configure2 = () => {
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState([]);
  const location = useLocation();
  const modelId = location.state?.modelId;

  useEffect(() => {
    if (modelId) {
      fetchVehicleDetails();
      handleButtonClick('S'); // Automatically press "Std. Features" on page load
    }
  }, [modelId]);

  const fetchVehicleDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/vehicleDetails/${modelId}`);
      const data = await response.json();
      setVehicleDetails(data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

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
      const data = await Promise.all(responses.map(response => response.json()));

      // Flatten the array of arrays into a single array
      const combinedData = data.flat();

      setItems(combinedData);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    fetchItems(category);
  };

  const renderItemList = () => (
    <div style={{ width: '100%', display: 'flex' }}>
      <div style={smallBoxStyle}>
        {/* Optional content for the smaller box can be added here */}
      </div>
      <div style={largeBoxStyle}>
        {items.map(item => (
          <div
            key={item.comp_id}
            style={{
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: item.is_configurable === 'Y' ? '#e7f0ff' : '#f5c6c6',
              color: item.is_configurable === 'Y' ? 'black' : 'darkred',
              borderRadius: '5px',
            }}
          >
            {item.comp_name}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={outerContainerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>{vehicleDetails.name} Select Features you want to add {vehicleDetails.model}</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {vehicleDetails.features && vehicleDetails.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={contentContainerStyle}>
        <div style={dropdownContainerStyle}>
          {selectedCategory && renderItemList()}
        </div>
      </div>
      <Navbar bg="light" variant="light" style={navbarStyle}>
        <Nav className="justify-content-center" style={{ width: '100%' }}>
          <Nav.Link onClick={() => handleButtonClick('S')} style={footerButtonStyle}>Std. Features</Nav.Link>
          <Nav.Link onClick={() => handleButtonClick('I')} style={footerButtonStyle}>Interior</Nav.Link>
          <Nav.Link onClick={() => handleButtonClick('E')} style={footerButtonStyle}>Exterior</Nav.Link>
          <Nav.Link onClick={() => handleButtonClick('A')} style={footerButtonStyle}>Accessories</Nav.Link>
          <Nav.Link style={footerButtonStyle}>Cancel</Nav.Link>
          <Nav.Link style={footerButtonStyle}>Confirm Order</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const contentContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start', // Align dropdown container to the left
  width: '100%',
};

const dropdownContainerStyle = {
  flex: 1,
  padding: '10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
};

const smallBoxStyle = {
  flex: 1,
  minWidth: '33.33%', // 1/3 width of the container
  padding: '10px',
  backgroundColor: '#e0e0e0',
  borderRadius: '5px',
  marginRight: '10px',
};

const largeBoxStyle = {
  flex: 3,
  padding: '10px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
};

const navbarStyle = {
  marginTop: '20px',
  width: '100%',
};

const footerButtonStyle = {
  margin: '0 10px',
  padding: '10px 20px',
  backgroundColor: 'yellow',
  border: 'none',
  color: 'black',
  fontWeight: 'bold',
};

export default Configure2;
