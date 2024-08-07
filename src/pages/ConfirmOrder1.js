import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/Extra Images/VitaLogo.png'; // Replace with the correct path to your logo

const ConfirmOrder1 = () => {
  const location = useLocation();
  const { modelId, quantity, price } = location.state || {};

  const name = "Jayesh Khairnar"; // Replace with dynamic data if available
  const email = "jayesh@example.com"; // Replace with dynamic data if available
  const carType = "Sedan"; // Replace with dynamic data if available
  const segment = "Premium"; // Replace with dynamic data if available
  const manufacturer = "Toyota"; // Replace with dynamic data if available
  const image = "/path-to-car-image.jpg"; // Replace with dynamic data if available

  const totalBasePrice = price * quantity;
  const gst = totalBasePrice * 0.28;
  const totalPrice = totalBasePrice + gst;

  const currentDate = new Date().toLocaleString();

  const invoiceStyle = {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    marginTop: '20px'
  };

  const logoStyle = {
    width: '150px',
    height: 'auto'
  };

  const tableStyle = {
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse'
  };

  const thStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2'
  };

  const tdStyle = {
    border: '1px solid #ddd',
    padding: '8px'
  };

  const totalStyle = {
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2'
  };

  return (
    <Container style={invoiceStyle}>
      <Row>
        <Col className="text-center">
          <img src={logo} alt="Logo" style={logoStyle} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h2>Invoice</h2>
          <p>{currentDate}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <th style={thStyle}>Name</th>
                <td style={tdStyle}>{name}</td>
              </tr>
              <tr>
                <th style={thStyle}>Email</th>
                <td style={tdStyle}>{email}</td>
              </tr>
              <tr>
                <th style={thStyle}>Car Type</th>
                <td style={tdStyle}>{carType}</td>
              </tr>
              <tr>
                <th style={thStyle}>Segment</th>
                <td style={tdStyle}>{segment}</td>
              </tr>
              <tr>
                <th style={thStyle}>Manufacturer</th>
                <td style={tdStyle}>{manufacturer}</td>
              </tr>
              <tr>
                <th style={thStyle}>Image</th>
                <td style={tdStyle}>
                  <img src={image} alt="Car" style={{ width: '100px', height: 'auto' }} />
                </td>
              </tr>
              <tr>
                <th style={thStyle}>Base Price</th>
                <td style={tdStyle}>₹{price}</td>
              </tr>
              <tr>
                <th style={thStyle}>Quantity</th>
                <td style={tdStyle}>{quantity}</td>
              </tr>
              <tr>
                <th style={thStyle}>Total Base Price</th>
                <td style={tdStyle}>₹{totalBasePrice}</td>
              </tr>
              <tr>
                <th style={thStyle}>GST (28%)</th>
                <td style={tdStyle}>₹{gst}</td>
              </tr>
              <tr style={totalStyle}>
                <th style={thStyle}>Total Payable</th>
                <td style={tdStyle}>₹{totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmOrder1;
