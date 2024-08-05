import React, { useRef, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Configure2 = () => {
  const imageStyle = {
    width: '791',
    height: '456',
    objectFit: 'cover',
  };

  const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: '20px', // Increased top margin
    marginRight: '30px', // Increased right margin
  };

  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState({});

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

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCheckboxChange = (item, price) => {
    setSelectedItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[item]) {
        delete updatedItems[item];
      } else {
        updatedItems[item] = price;
      }
      return updatedItems;
    });
  };

  const renderCheckboxList = (items) => (
    <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
      {items.map(([item, price], index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            id={item}
            name={item}
            onChange={() => handleCheckboxChange(item, price)}
          />
          <label htmlFor={item} style={{ marginLeft: '5px' }}>
            {item} - ₹{price}
          </label>
        </li>
      ))}
    </ul>
  );

  const calculateTotal = () => {
    return Object.values(selectedItems).reduce((total, price) => total + price, 0);
  };

  const interiorItems = [
    ['Leather Seats', 30000],
    ['Sunroof', 40000],
    ['Navigation System', 50000],
    ['Bluetooth', 20000],
    ['Premium Audio', 35000],
  ];
  const exteriorItems = [
    ['Alloy Wheels', 25000],
    ['Fog Lights', 15000],
    ['Sunroof', 40000],
    ['Spoiler', 30000],
    ['Roof Railing', 20000],
  ];
  const accessoryItems = [
    ['Floor Mats', 10000],
    ['Cargo Organizer', 12000],
    ['Mud Flaps', 8000],
    ['Car Cover', 15000],
    ['Keychain', 3000],
  ];

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <h3>Honda City -- XX</h3>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li>177-hp, 2.4-liter, 16-Valve, DOHC, i-VTEC®, 4-Cylinder Engine</li>
            <li>White body colour</li>
            <li>5-Speed Manual Transmission</li>
            <li>Double Wishbone Front Suspension</li>
            <li>Independent Multi-Link Rear Suspension</li>
            <li>Front and Rear Stabilizer Bars</li>
            <li>Variable Gear Ratio (VGR) Power-Assisted Rack-and-Pinion Steering</li>
            <li>Black colour bumper</li>
          </ul>
        </div>
        <div ref={cardRef} style={{ flex: 1 }}>
          <div style={{ ...imageContainerStyle, height: cardHeight }}>
            <img
              src="https://via.placeholder.com/400x300.png?text=Car+Image+Placeholder"
              alt="Car Placeholder"
              style={imageStyle}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h5>Standard Features</h5>
        {/* No features list as per previous update */}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        <Button style={footerButtonStyle} onClick={() => handleButtonClick('standard')}>Std. Features</Button>
        <Button style={footerButtonStyle} onClick={() => handleButtonClick('interior')}>Interior</Button>
        <Button style={footerButtonStyle} onClick={() => handleButtonClick('exterior')}>Exterior</Button>
        <Button style={footerButtonStyle} onClick={() => handleButtonClick('accessories')}>Accessories</Button>
        <Button style={footerButtonStyle}>Cancel</Button>
        <Button style={footerButtonStyle}>Confirm Order</Button>
      </div>
      {selectedCategory && (
        <div style={{ marginTop: '20px' }}>
          <Card style={{ padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <Card.Body>
              <h5>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h5>
              {selectedCategory === 'interior' && renderCheckboxList(interiorItems)}
              {selectedCategory === 'exterior' && renderCheckboxList(exteriorItems)}
              {selectedCategory === 'accessories' && renderCheckboxList(accessoryItems)}
              <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                Total: ₹{calculateTotal()}
              </div>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  margin: '20px', // Margin around the entire container
  padding: '20px', // Padding inside the container
  backgroundColor: '#f9f9f9', // Light background color to distinguish from other sections
  borderRadius: '8px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Shadow effect for better separation
};

const footerButtonStyle = {
  margin: '0 2px', // Reduced margin between buttons
  padding: '10px 20px',
  backgroundColor: 'yellow',
  border: 'none',
  color: 'black',
  fontWeight: 'bold',
  borderRadius: '4px', // Rounded edges
};

export default Configure2;
