import React, { useState } from 'react';
import { Container, Form, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap';

const DropdownPage = () => {
    const [selectedSegment, setSelectedSegment] = useState(null);
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);

    // Inline styles for dropdowns
    const dropdownButtonStyle = {
        width: '100%', // Full width for consistency
        textAlign: 'center', // Center text alignment
        marginBottom: '1rem',
        padding: '0.5rem', // Consistent padding
        borderRadius: '4px', // Optional: Add border-radius if needed
    };

    const dropdownItemStyle = {
        padding: '0.5rem 1rem', // Consistent padding for dropdown items
        textAlign: 'center', // Center text alignment
    };

    const buttonStyle = {
        width: '100%', // Full width for consistency
        padding: '0.75rem', // Extra padding
        backgroundColor: '#28a745', // Green color
        border: 'none',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '4px',
        marginTop: '1rem', // Margin on top
        fontSize: '16px', // Font size
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const buttonTextStyle = {
        marginRight: '8px', // Space between text and arrow
    };

    const buttonArrowStyle = {
        marginLeft: '8px', // Space between text and arrow
        fontSize: '18px', // Font size for the arrow
    };

    return (
        <Container 
            fluid 
            style={{ 
                padding: '2rem 4rem', // Padding on left and right
                backgroundColor: '#f0f0f0', // Gray background for the container
            }}
        >
            <Row className="justify-content-center">
                <Col lg={6} md={8} style={{ backgroundColor: '#fff', borderRadius: 0, padding: '1.5rem' }}>
                    <Form>
                        <Form.Group controlId="segmentDropdown" className="mb-4">
                            <DropdownButton 
                                id="segmentDropdownButton" 
                                title={selectedSegment || "Select Segment"} 
                                className="w-100"
                                style={dropdownButtonStyle}
                            >
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedSegment('Option 1')}
                                >
                                    Option 1
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedSegment('Option 2')}
                                >
                                    Option 2
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedSegment('Option 3')}
                                >
                                    Option 3
                                </Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group controlId="manufacturerDropdown" className="mb-4">
                            <DropdownButton 
                                id="manufacturerDropdownButton" 
                                title={selectedManufacturer || "Select Manufacturer"} 
                                className="w-100"
                                style={dropdownButtonStyle}
                            >
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedManufacturer('Option 1')}
                                >
                                    Option 1
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedManufacturer('Option 2')}
                                >
                                    Option 2
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedManufacturer('Option 3')}
                                >
                                    Option 3
                                </Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group controlId="variantDropdown" className="mb-4">
                            <DropdownButton 
                                id="variantDropdownButton" 
                                title={selectedVariant || "Select Variant"} 
                                className="w-100"
                                style={dropdownButtonStyle}
                            >
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedVariant('Option 1')}
                                >
                                    Option 1
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedVariant('Option 2')}
                                >
                                    Option 2
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedVariant('Option 3')}
                                >
                                    Option 3
                                </Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group controlId="quantityDropdown" className="mb-4">
                            <DropdownButton 
                                id="quantityDropdownButton" 
                                title={selectedQuantity || "Select Quantity"} 
                                className="w-100"
                                style={dropdownButtonStyle}
                            >
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedQuantity('1')}
                                >
                                    1
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedQuantity('2')}
                                >
                                    2
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedQuantity('3')}
                                >
                                    3
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedQuantity('4')}
                                >
                                    4
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedQuantity('5')}
                                >
                                    5
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    href="#" 
                                    style={dropdownItemStyle}
                                    onClick={() => setSelectedQuantity('10')}
                                >
                                    10
                                </Dropdown.Item>
                            </DropdownButton>
                        </Form.Group>

                        <Button 
                            style={buttonStyle}
                            onClick={() => alert('Button clicked!')} // Handle button click
                        >
                            <span style={buttonTextStyle}>Next</span>
                            <span style={buttonArrowStyle}>→</span> {/* Right arrow text */}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DropdownPage;
