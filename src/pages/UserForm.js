import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import bg001 from '../assets/Login Page Images/log.jpg';

const UserForm = () => {
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setShowAlert(true);
            // Redirect after showing the alert
            setTimeout(() => {
                navigate('/AccountCreatedResponse'); // Redirect to the new route
            }, 3000);
        }
        setValidated(true);
    };

    const handleReset = () => {
        setValidated(false);
        setShowAlert(false);
    };

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 3000);

            return () => clearTimeout(timer); // Clean up timer on unmount
        }
    }, [showAlert]);

    return (
        <Container fluid style={{
            padding: '2rem 1rem',
            backgroundImage: `url(${bg001})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            backgroundAttachment: 'fixed'
        }}>
            <Row className="justify-content-center">
                <Col md={8} lg={6} style={{ marginBottom: '1rem' }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
                        width: '100%',
                        backgroundColor: '#f8f9fa',
                        padding: '2rem',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 className="text-center mb-4">User Registration</h2>
                        {/* Top Section: Email, Password, and Confirm Password */}
                        <Row className="mb-4">
                            <Col md={12}>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter email" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Enter password" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm password" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password confirmation is required.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        {/* Main Section: Other Fields */}
                        <Row className="mb-4">
                            <Col md={6} style={{ paddingRight: '0.5rem' }}>
                                <Form.Group controlId="formCompanyName" className="mb-3">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter company name" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAddressLine1" className="mb-3">
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter address line 1" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formCity" className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter city" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPinCode" className="mb-3">
                                    <Form.Label>Pin Code</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter pin code" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6} style={{ paddingLeft: '0.5rem' }}>
                                <Form.Group controlId="formAddressLine2" className="mb-3">
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter address line 2" 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formState" className="mb-3">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter state" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formTelephone" className="mb-3">
                                    <Form.Label>Telephone</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter telephone number" 
                                        required 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formGstNumber" className="mb-3">
                                    <Form.Label>GST Number</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter GST number" 
                                        style={{ borderRadius: '4px', borderColor: '#ced4da' }}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Button 
                                    variant="dark" 
                                    type="submit"
                                    className="me-2"
                                >
                                    Submit
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    type="reset"
                                    onClick={handleReset}
                                >
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible style={{
                    position: 'fixed',
                    bottom: '1rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: '1px solid #218838',
                    borderRadius: '8px',
                    padding: '1rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    zIndex: 1050
                }}>
                    <Alert.Heading>Form Submitted Successfully</Alert.Heading>
                </Alert>
            )}
        </Container>
    );
};

export default UserForm;
