import React, { useState, useEffect } from 'react';
import { Container, Form, Dropdown, DropdownButton, Row, Col, Button } from 'react-bootstrap';
import '../CSS/DropDownPage.css'; // Import the CSS file if needed

const DropdownPage = () => {
    const [selectedSegment, setSelectedSegment] = useState(null);
    const [selectedManufacturer, setSelectedManufacturer] = useState(null);
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(null);
    const [segments, setSegments] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [variants, setVariants] = useState([]);
    const [selectedSegmentId, setSelectedSegmentId] = useState(null);
    const [selectedManufacturerId, setSelectedManufacturerId] = useState(null);

    const quantities = [1, 2, 3, 4, 5, 10];

    useEffect(() => {
        // Fetch segments from API
        fetch('http://localhost:8080/api/segments/')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched segments:', data); // Debugging line
                setSegments(data);
            })
            .catch(error => console.error('Error fetching segments:', error));
    }, []);

    useEffect(() => {
        if (selectedSegmentId !== null) {
            // Fetch manufacturers based on selected segment ID
            fetch(`http://localhost:8080/api/manufacturers/${selectedSegmentId}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched manufacturers:', data); // Debugging line
                    setManufacturers(data);
                })
                .catch(error => console.error('Error fetching manufacturers:', error));
        }
    }, [selectedSegmentId]);

    useEffect(() => {
        if (selectedSegmentId !== null && selectedManufacturerId !== null) {
            // Fetch variants based on selected segment ID and manufacturer ID
            fetch(`http://localhost:8080/api/models/${selectedSegmentId}/${selectedManufacturerId}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched variants:', data); // Debugging line
                    setVariants(data);
                })
                .catch(error => console.error('Error fetching variants:', error));
        }
    }, [selectedSegmentId, selectedManufacturerId]);

    const handleSegmentSelect = (segment) => {
        setSelectedSegment(segment.name);
        setSelectedSegmentId(segment.id); // Set the segment ID for fetching manufacturers
        setSelectedManufacturer(null); // Reset manufacturer selection
        setSelectedManufacturerId(null); // Reset manufacturer ID
        setVariants([]); // Clear variants when segment changes
        setSelectedVariant(null); // Reset variant selection
    };

    const handleManufacturerSelect = (manufacturer) => {
        setSelectedManufacturer(manufacturer.name);
        setSelectedManufacturerId(manufacturer.id); // Set the manufacturer ID for fetching variants
        setSelectedVariant(null); // Reset variant selection
    };

    return (
        <Container 
            fluid 
            style={{
                padding: '2rem 4rem',
                backgroundColor: '#f0f0f0'
            }}
        >
            <Row className="justify-content-center">
                <Col lg={6} md={8} style={{
                    backgroundColor: '#fff',
                    borderRadius: '0',
                    padding: '1.5rem'
                }}>
                    <Form>
                        <Form.Group controlId="segmentDropdown" className="mb-4">
                            <DropdownButton 
                                id="segmentDropdownButton" 
                                title={selectedSegment || "Select Segment"} 
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    padding: '0.5rem',
                                    borderRadius: '4px'
                                }}
                            >
                                {segments.map(segment => (
                                    <Dropdown.Item 
                                        key={segment.id} 
                                        href="#" 
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textAlign: 'center'
                                        }}
                                        onClick={() => handleSegmentSelect(segment)}
                                    >
                                        {segment.name}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group controlId="manufacturerDropdown" className="mb-4">
                            <DropdownButton 
                                id="manufacturerDropdownButton" 
                                title={selectedManufacturer || "Select Manufacturer"} 
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    padding: '0.5rem',
                                    borderRadius: '4px'
                                }}
                            >
                                {manufacturers.length > 0 ? (
                                    manufacturers.map(manufacturer => (
                                        <Dropdown.Item 
                                            key={manufacturer.id} 
                                            href="#" 
                                            style={{
                                                padding: '0.5rem 1rem',
                                                textAlign: 'center'
                                            }}
                                            onClick={() => handleManufacturerSelect(manufacturer)}
                                        >
                                            {manufacturer.name}
                                        </Dropdown.Item>
                                    ))
                                ) : (
                                    <Dropdown.Item 
                                        href="#" 
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textAlign: 'center'
                                        }}
                                    >
                                        No manufacturers available
                                    </Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group controlId="variantDropdown" className="mb-4">
                            <DropdownButton 
                                id="variantDropdownButton" 
                                title={selectedVariant || "Select Variant"} 
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    padding: '0.5rem',
                                    borderRadius: '4px'
                                }}
                            >
                                {variants.length > 0 ? (
                                    variants.map(variant => (
                                        <Dropdown.Item 
                                            key={variant.id} 
                                            href="#" 
                                            style={{
                                                padding: '0.5rem 1rem',
                                                textAlign: 'center'
                                            }}
                                            onClick={() => setSelectedVariant(variant.name)}
                                        >
                                            {variant.name}
                                        </Dropdown.Item>
                                    ))
                                ) : (
                                    <Dropdown.Item 
                                        href="#" 
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textAlign: 'center'
                                        }}
                                    >
                                        No variants available
                                    </Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Form.Group>

                        <Form.Group controlId="quantityDropdown" className="mb-4">
                            <DropdownButton 
                                id="quantityDropdownButton" 
                                title={selectedQuantity || "Select Quantity"} 
                                style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    padding: '0.5rem',
                                    borderRadius: '4px'
                                }}
                            >
                                {quantities.map(quantity => (
                                    <Dropdown.Item 
                                        key={quantity} 
                                        href="#" 
                                        style={{
                                            padding: '0.5rem 1rem',
                                            textAlign: 'center'
                                        }}
                                        onClick={() => setSelectedQuantity(quantity)}
                                    >
                                        {quantity}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Form.Group>

                        <Button 
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                backgroundColor: '#28a745',
                                border: 'none',
                                color: '#fff',
                                textAlign: 'center',
                                borderRadius: '4px',
                                marginTop: '1rem',
                                fontSize: '16px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onClick={() => alert('Button clicked!')} // Handle button click
                        >
                            <span style={{
                                marginRight: '8px'
                            }}>Next</span>
                            <span style={{
                                marginLeft: '8px',
                                fontSize: '18px'
                            }}>→</span> {/* Right arrow text */}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default DropdownPage;
