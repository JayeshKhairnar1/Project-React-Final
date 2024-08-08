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
  const { modelId, quantity, price } = location.state || {};

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
    const newItem = {
      id: item.comp_id,
      name: `${item.comp_name}: ${selectedOption.label.split(' - ')[0]}`,
      price: parseFloat(selectedOption.label.split(' - ₹')[1]),
    };

    setSelectedItems(prevItems => {
      // Remove any existing selection for the same item
      const updatedItems = prevItems.filter(selectedItem => selectedItem.id !== item.comp_id);
      // Add the new selection
      return [...updatedItems, newItem];
    });
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
            <div style={{ marginLeft: '10px' }}>
              {item.dropdownOptions.map(option => (
                <div key={option.value}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems.some(selectedItem => selectedItem.id === item.comp_id && selectedItem.price === parseFloat(option.label.split(' - ₹')[1]))}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleDropdownChange(item, option);
                        } else {
                          setSelectedItems(prevItems => prevItems.filter(selectedItem => !(selectedItem.id === item.comp_id && selectedItem.price === parseFloat(option.label.split(' - ₹')[1]))));
                        }
                      }}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
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

  const renderSelectedItems = () => {
    const basePriceEntry = {
      id: 'base-price',
      name: 'Base Price',
      price: price || 0, // Use the base price from location.state
    };

    // Base price total
    const basePriceTotal = basePriceEntry.price * quantity;
    
    // Total for selected items
    const totalSelectedItems = selectedItems.reduce((sum, item) => sum + item.price * quantity, 0);

    // Net payable
    const totalPrice = basePriceTotal + totalSelectedItems;

    return (
      <div style={selectedItemsContainerStyle}>
        <h4>Selected Items</h4>
        <div style={selectionBoxStyle}>
          <div style={leftSideStyle}>
            <div style={itemStyle}>
              <label>
                <input 
                  type="checkbox" 
                  checked 
                  readOnly
                />
                {basePriceEntry.name} - ₹{basePriceEntry.price}
              </label>
            </div>
            {selectedItems.map(item => (
              <div key={item.id} style={itemStyle}>
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
          </div>
          <div style={rightSideStyle}>
            <div style={itemStyle}>
              <label>
                {basePriceEntry.name} - ₹{basePriceEntry.price} x {quantity} = ₹{basePriceTotal}
              </label>
            </div>
            {selectedItems.map(item => (
              <div key={item.id} style={itemStyle}>
                <label>
                  {item.name} - ₹{item.price} x {quantity} = ₹{item.price * quantity}
                </label>
              </div>
            ))}
            <div style={totalStyle}>
              Net Payable: ₹{totalPrice}
            </div>
          </div>
        </div>
      </div>
    );
  };

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

  const outerContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const imageAndButtonsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const navbarStyle = {
    marginTop: '20px',
    width: '100%',
  };

  const footerButtonStyle = {
    margin: '0 10px',
    fontWeight: 'bold',
  };

  const infoContainerStyle = {
    width: '100%',
    maxWidth: '1200px',
    marginTop: '20px',
  };

  const selectedItemsContainerStyle = {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '1200px',
  };

  const selectionBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const leftSideStyle = {
    width: '50%',
    paddingRight: '10px',
    borderRight: '1px solid #ddd',
  };

  const rightSideStyle = {
    width: '50%',
    paddingLeft: '10px',
  };

  const itemStyle = {
    padding: '5px 0',
  };

  const totalStyle = {
    marginTop: '10px',
    fontWeight: 'bold',
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
            <Nav.Link onClick={() => setSelectedItems([])} style={footerButtonStyle}>Cancel</Nav.Link>
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

export default Configure2;
