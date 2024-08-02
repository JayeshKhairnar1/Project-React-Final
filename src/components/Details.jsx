import React, { useState } from 'react';
import {  
    Box,
    Button,
    Stack,
    TextField,
    Snackbar,
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            companyName: data.get('companyName'),
            enquiry: data.get('enquiry'),
            phone: data.get('phone'),
            email: data.get('email'),
            address: data.get('address'),
        });
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            navigate('/home');
        }, 2000); // Adjust the timeout here
    };

    return (
        <Stack 
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                px: 2,
            }}
        >
            <Title 
                text='Interested in Buying a Vehicle?' 
                textAlign='center'
            />
            <Paragraph 
                text='If you are interested in buying a vehicle, please contact us. We will call you shortly to fulfill your requirements and assist with your property needs.'
                maxWidth='sm'
                mx={0}
                textAlign='center'
            />

            <Box 
                component="form" 
                noValidate 
                onSubmit={handleSubmit} 
                sx={{ 
                    mt: 1,
                    py: 2,
                    maxWidth: '600px',
                    width: '100%',
                }}
            >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="companyName"
                    label="Company Name"
                    name="companyName"
                    autoComplete="companyName"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="enquiry"
                    label="Enquiry"
                    name="enquiry"
                    autoComplete="enquiry"
                    multiline
                    rows={4}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Contact Number"
                    name="phone"
                    autoComplete="phone"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                />
                <Button 
                    variant="contained" 
                    fullWidth
                    type="submit"
                    size="medium"
                    sx={{ 
                        fontSize: '0.9rem',
                        textTransform: 'capitalize', 
                        py: 2,
                        mt: 3, 
                        mb: 2,
                        borderRadius: 0,
                        backgroundColor: '#14192d',
                        "&:hover": {
                            backgroundColor: '#1e2a5a',
                        }
                    }}
                >
                    Send
                </Button>
            </Box>
            <Snackbar
                open={open}
                message="Query Submitted Successfully"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{ 
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: '#1e2a5a',
                        color: '#fff',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                    }
                }}
            />
        </Stack>
    );
};

export default Details;
