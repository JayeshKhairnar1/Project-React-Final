import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Configure2 = () => {
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('S');
  const [items, setItems] = useState([]);
  const [accessoryOptions, setAccessoryOptions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const location = useLocation();
  const { modelId, quantity } = location.state || {};

  useEffect(() => {
    if (modelId) {
      fetchVehicleDetails();
      fetchItems('S'); // Automatically fetch "Std. Features" on page load
    }
  }, [modelId]);

  useEffect(() => {
    if (selectedCategory === 'A') {
      fetchAccessoryOptions();
    }
  }, [selectedCategory]);

  const fetchVehicleDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/cars/${modelId}`);
      const data = await response.json();
      setVehicleDetails(data);
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };

  const fetchItems = async (category) => {
    try {
      const response = await fetch(`http://localhost:8080/api/vehicles/${category}/${modelId}`);
      const data = await response.json();
      const itemsWithDropdowns = await Promise.all(data.map(async item => {
        if (item.is_configurable === 'Y') {
          const dropdownOptions = await fetchDropdownOptions(modelId, item.comp_id);
          return {
            ...item,
            dropdownOptions,
          };
        }
        return item;
      }));
      setItems(itemsWithDropdowns);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const fetchDropdownOptions = async (modelId, compId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/alternate/${modelId}/${compId}`);
      const data = await response.json();
      return data.map(option => ({
        value: option.alt_comp_id,
        label: `${option.comp_name} - ₹${option.delta_price}`,
      }));
    } catch (error) {
      console.error('Error fetching dropdown options:', error);
      return [];
    }
  };

  const fetchAccessoryOptions = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/alternate/${modelId}/108`);
      const data = await response.json();
      const options = data.map(option => ({
        id: option.alt_comp_id,
        name: option.comp_name,
        price: option.delta_price,
      }));
      setAccessoryOptions(options);
    } catch (error) {
      console.error('Error fetching accessory options:', error);
    }
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    if (category !== 'A') {
      fetchItems(category);
    }
  };

  const handleDropdownChange = (item, selectedOption) => {
    const existingItemIndex = selectedItems.findIndex(selectedItem => selectedItem.id === item.comp_id);
    const newItem = {
      id: item.comp_id,
      name: `${item.comp_name}: ${selectedOption.label.split(' - ')[0]}`,
      price: parseFloat(selectedOption.label.split(' - ₹')[1]),
    };
    
    if (existingItemIndex > -1) {
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex] = newItem;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems(prevItems => [...prevItems, newItem]);
    }
  };

  const handleCheckboxChange = (option, isChecked) => {
    if (isChecked) {
      setSelectedItems(prevItems => [...prevItems, option]);
    } else {
      setSelectedItems(prevItems => prevItems.filter(item => item.id !== option.id));
    }
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const renderItemList = () => (
    <div style={{ width: '100%' }}>
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
          {item.is_configurable === 'Y' && selectedCategory !== 'S' && (
            <select 
              style={{ marginLeft: '10px' }}
              onChange={(e) => {
                const selectedOption = item.dropdownOptions.find(opt => opt.value === e.target.value);
                handleDropdownChange(item, selectedOption);
              }}
            >
              <option value="">Select an option</option>
              {item.dropdownOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
  );

  const renderAccessoryOptions = () => (
    <div style={{ width: '100%' }}>
      {accessoryOptions.map(option => (
        <div key={option.id} style={{ padding: '10px', marginBottom: '10px' }}>
          <label>
            <input 
              type="checkbox" 
              onChange={(e) => handleCheckboxChange(option, e.target.checked)}
            />
            {option.name} - ₹{option.price}
          </label>
        </div>
      ))}
    </div>
  );

  const renderSelectedItems = () => (
    <div style={selectedItemsContainerStyle}>
      <h4>Selected Items</h4>
      {selectedItems.map(item => (
        <div key={item.id} style={selectedItemStyle}>
          <label>
            <input 
              type="checkbox" 
              checked 
              onChange={() => handleRemoveItem(item.id)} 
            />
            {item.name} - ₹{item.price}
          </label>
        </div>
      ))}
      <div style={totalStyle}>
        Total: ₹{selectedItems.reduce((sum, item) => sum + item.price, 0)}
      </div>
    </div>
  );

  const ImageBox = ({ imageUrl }) => (
    <div style={imageBoxStyle}>
      <img 
        src={`${process.env.PUBLIC_URL}${vehicleDetails.path}`} // Convert path for correct rendering
        alt={vehicleDetails.carName} 
        style={imageStyle} 
      />
    </div>
  );

  const imageBoxStyle = {
    width: '688px', // Fixed width for the image box
    height: '423px', // Fixed height for the image box
    padding: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    marginBottom: '20px', // Add margin below the image
    flexShrink: 0, // Prevent the image box from shrinking
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure the image covers the box without distortion
    borderRadius: '5px',
  };

  return (
    <div style={outerContainerStyle}>
      <div style={imageAndButtonsContainerStyle}>
        {vehicleDetails ? (
          <ImageBox imageUrl={`http://localhost:8080${vehicleDetails.path}`} /> // Use the correct URL
        ) : (
          <div style={imageBoxStyle}>
            <p>No image available</p>
          </div>
        )}
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
      <div style={infoContainerStyle}>
        <h3>{vehicleDetails?.name} Select Features you want to add {vehicleDetails?.model}</h3>
        {selectedCategory === 'A' ? renderAccessoryOptions() : renderItemList()}
      </div>
      {renderSelectedItems()}
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

const imageAndButtonsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px', // Add margin below the buttons bar to separate it from the info container
};

const infoContainerStyle = {
  flex: 1,
  padding: '10px',
  width: '100%',
};

const navbarStyle = {
  width: '100%',
  marginBottom: '20px', // Add margin below the buttons bar
};

const footerButtonStyle = {
  margin: '0 10px',
  padding: '10px 20px',
  backgroundColor: 'yellow',
  border: 'none',
  color: 'black',
  fontWeight: 'bold',
};

const selectedItemsContainerStyle = {
  width: '300px', // Fixed width for the selected items container
  backgroundColor: 'lightblue', // Light blue background
  padding: '10px',
  borderRadius: '5px',
  marginTop: '20px', // Margin above the selected items container
};

const selectedItemStyle = {
  padding: '5px',
  marginBottom: '5px',
};

const totalStyle = {
  marginTop: '10px',
  fontWeight: 'bold',
};

export default Configure2;
