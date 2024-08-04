import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title'; // Make sure Title component is compatible with React Bootstrap
import imgDetail from '../assets/Get Started Images/maruti_swift_lxi-removebg-preview.png';
import imgDetail2 from '../assets/Get Started Images/maruti_swift_zxi-removebg-preview.png';

const GetStarted = () => {
  return (
    <Container 
      fluid
      style={{
        //backgroundColor: '#fff4e6', // Light orange background
        paddingTop: '3rem', // Adjust padding as needed
        paddingBottom: '3rem', // Adjust padding as needed
      }}
    >
      <Row className="g-4">
        <Col xs={12} sm={8} md={6} className="d-flex flex-column justify-content-center">
          <div style={{ padding: '0 1.5rem' }}>
            <Title text="Customize Your Dream Vehicle" textAlign="start" />
            <p style={{
              fontSize: '1.1rem',
              textAlign: 'start',
              lineHeight: '1.5',
              color: '#515151',
              marginTop: '1.5rem'
            }}>
              Our vehicle configurator makes it easy for you to design and customize your perfect vehicle. Explore a wide range of options and features to create a vehicle that reflects your unique style and preferences.
            </p>
          </div>
        </Col>
        
        <Col xs={12} sm={4} md={6} className="d-flex justify-content-center">
          <img src={imgDetail} alt="" style={{ width: '100%' }} />
        </Col>

        <Col xs={12} sm={4} md={6} className="d-flex justify-content-center order-md-3">
          <img src={imgDetail2} alt="" style={{ width: '100%' }} />
        </Col>

        <Col xs={12} sm={8} md={6} className="d-flex flex-column justify-content-center order-md-4">
          <div style={{ padding: '0 1.5rem' }}>
            <Title text="Get Expert Assistance" textAlign="start" />
            <p style={{
              fontSize: '1.1rem',
              textAlign: 'start',
              lineHeight: '1.5',
              color: '#515151',
              marginTop: '1.5rem'
            }}>
              Connect with our experienced agents who are dedicated to helping you through the customization process. Our experts are here to ensure you make the best choices for your vehicle, providing you with personalized support every step of the way.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStarted;
