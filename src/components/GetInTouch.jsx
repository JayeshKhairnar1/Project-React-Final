import React from 'react';
import {  
    Button,
    Stack,
    Box,
} from '@mui/material';
import Title from './Title';
import Paragraph from './Paragraph';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <Stack 
            component='section'
            direction="column"
            justifyContent='center'
            alignItems='center'
            sx={{
                py: 10,
                mx: 6,
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
                boxShadow: 3,
            }}
        >
            <Title 
                text={'Get in Touch'}
                textAlign={'center'}
            />
            <Paragraph 
                text={
                    'We are here to assist you in customizing and personalizing your dream vehicle. Our team is committed to ensuring a professional and enjoyable experience for you. If you have any questions, need assistance, or want to start configuring your vehicle, click the button below to get in touch with us.'
                }
                maxWidth={'sm'}
                mx={0}
                textAlign={'center'}
            />
            <Button 
                component={Link} 
                to={'/contact'}
                variant="contained" 
                size="medium"
                sx={{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    px: 4,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
            >
                Get in Touch
            </Button>
        </Stack>
    );
}

export default GetInTouch;
