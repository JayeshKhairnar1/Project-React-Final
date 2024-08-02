import React from 'react';
import {  
    Grid, 
    Typography,
    Card,
    CardContent,
} from "@mui/material";

const Content = () => {
  return (    
    <Grid container spacing={0}   
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 10,
        px: 2,
      }}
    >
      <Card 
        square={ true }
        sx={{
          width: '80%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'start',
          border: '1px solid #ccc',
          padding: 4,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent>
          <Typography 
            variant="h4" 
            component="h1"
            sx={{
              fontWeight: 700,
              marginBottom: 2,
            }}
          >
            About Us
          </Typography>
          <Typography 
            variant="body1" 
            component="p"
            sx={{
              marginBottom: 2,
            }}
          >
            Welcome to our Vehicle Configurator – your ultimate destination for customizing and personalizing your dream vehicle. Our platform provides a seamless and intuitive experience, allowing you to explore a wide array of options, features, and accessories to tailor your vehicle precisely to your preferences. Whether you're an automotive enthusiast aiming to create a unique masterpiece or a practical buyer optimizing your vehicle for specific needs, our configurator caters to all. You can select the exterior color, wheel design, performance settings, and interior amenities – the possibilities are endless.
          </Typography>
          <Typography 
            variant="body1" 
            component="p"
          >
            Our mission is to empower you with the tools and information needed to make informed decisions about your vehicle purchase. With our user-friendly interface and extensive range of options, we aim to deliver an unparalleled customization experience that ensures every vehicle reflects its owner's personality and lifestyle. Whether you're a car enthusiast, a first-time buyer, or anyone in between, our vehicle configurator is designed for you. Explore, customize, and envision your perfect ride with us today!
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Content;
