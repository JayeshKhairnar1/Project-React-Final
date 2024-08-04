import React from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AccountCreatedResponse = () => {
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleLogin = () => {
        navigate('/login'); // Redirect to the login page
    };

    const handleHome = () => {
        navigate('/'); // Redirect to the home page
    };

    return (
        <Container
            fluid
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #f2f2f2 0%, #ffffff 100%)',
                padding: '2rem',
            }}
        >
            <div
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    backgroundColor: '#ffffff',
                    padding: '2rem',
                    borderRadius: '12px',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    border: '1px solid #ddd',
                    background: 'linear-gradient(white, #f9f9f9)',
                }}
            >
                <Alert
                    variant="success"
                    style={{
                        backgroundColor: '#d4edda',
                        borderColor: '#c3e6cb',
                        color: '#155724',
                        borderRadius: '8px',
                        padding: '1rem',
                        fontSize: '1.2rem',
                    }}
                >
                    <Alert.Heading>Thank you for registration!</Alert.Heading>
                    <p>We have emailed you your Login ID and Password.</p>
                    <p>Let's configure your vehicle...</p>
                </Alert>
                <div
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                    }}
                >
                    <Button
                        variant="primary"
                        onClick={handleLogin}
                        style={{
                            backgroundColor: '#007bff',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '6px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                    >
                        Login
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={handleHome}
                        style={{
                            backgroundColor: '#6c757d',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '6px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            transition: 'background-color 0.3s ease',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a6268'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
                    >
                        Home
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default AccountCreatedResponse;
