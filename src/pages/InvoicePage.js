import React, { useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom'; // Import useLocation for accessing passed state
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import logo from '../assets/Extra Images/VitaLogo.png'; // Adjust the path if necessary

const InvoicePage = () => {
  const invoiceRef = useRef();
  const location = useLocation();
  const { invoiceData } = location.state || {}; // Retrieve invoice data from location state

  // Retrieve userId from session storage
  const userId = sessionStorage.getItem('userid') || 'N/A';

  const handlePrint = () => {
    html2canvas(invoiceRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 15, 10, 180, 160);
      pdf.save('invoice.pdf');
    });
  };

  const containerStyle = {
    padding: '20px',
    width: '1000px',
    border: '1px solid black',
    position: 'relative',
    backgroundColor: '#fff',
    margin: 'auto',
  };

  const logoStyle = {
    width: '150px',
  };

  const bannerStyle = {
    fontSize: '25px',
    fontWeight: 'bold',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    border: '1px solid black',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0', // Optional: Add background color to headers
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
  };

  return (
    <Container fluid>
      <div ref={invoiceRef} style={containerStyle}>
        <Row className="mb-4">
          <Col className="text-center">
            <img src={logo} alt="Logo" style={logoStyle} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col className="text-center">
            <div style={bannerStyle}>Invoice</div>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <p><strong>User ID:</strong> {userId}</p> {/* Display userId */}
            <p><strong>Customer Name:</strong> {invoiceData?.customerName || 'N/A'}</p>
            <p><strong>Address:</strong> {invoiceData?.address || 'N/A'}</p>
            <p><strong>Invoice Date:</strong> {invoiceData?.invoiceDate || new Date().toLocaleDateString()}</p>
            <p><strong>Invoice Number:</strong> {invoiceData?.invoiceNumber || 'INV-000000'}</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Item</th>
                  <th style={thStyle}>Description</th>
                  <th style={thStyle}>Quantity</th>
                  <th style={thStyle}>Price</th>
                  <th style={thStyle}>Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData?.items?.map((item, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{item.name}</td>
                    <td style={tdStyle}>{item.description}</td>
                    <td style={tdStyle}>{item.quantity}</td>
                    <td style={tdStyle}>${item.price.toFixed(2)}</td>
                    <td style={tdStyle}>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4" style={tdStyle}>Total</td>
                  <td style={tdStyle}>
                    ${invoiceData?.totalPrice.toFixed(2) || '0.00'}
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
      <Button
        variant="primary"
        onClick={handlePrint}
        style={{ margin: '20px' }}
      >
        Print PDF
      </Button>
    </Container>
  );
};

export default InvoicePage;
