import React from 'react';
import {  
    Grid, 
    Typography,
    IconButton,
    Card,
    CardContent,
} from "@mui/material";
// icons
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
// components
import Title from './Title'
import Paragraph from './Paragraph'

const Content = () => {
  return (    
    <Grid container spacing={0}   
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        py: 10,
        px: 2,
      }}
    >
      <Grid item xs={12} sm={12} md={5}
        component = 'section'
      >
        <Title
          text={
            'About Us'
          }
          textAlign={'start'}
        />

        <Paragraph 
          text={
            'Welcome to our Vehicle Configurator – your ultimate destination for customizing and personalizing your dream vehicle. Our platform provides a seamless and intuitive experience, allowing you to explore a wide array of options, features, and accessories to tailor your vehicle precisely to your preferences. Whether you\'re an automotive enthusiast aiming to create a unique masterpiece or a practical buyer optimizing your vehicle for specific needs, our configurator caters to all. You can select the exterior color, wheel design, performance settings, and interior amenities – the possibilities are endless.'
          }
          maxWidth={'75%'}
          mx={0}
          textAlign={'start'}
        />
        
        <Paragraph 
          text={
            'Our mission is to empower you with the tools and information needed to make informed decisions about your vehicle purchase. With our user-friendly interface and extensive range of options, we aim to deliver an unparalleled customization experience that ensures every vehicle reflects its owner\'s personality and lifestyle. Whether you\'re a car enthusiast, a first-time buyer, or anyone in between, our vehicle configurator is designed for you. Explore, customize, and envision your perfect ride with us today!'
          }
          maxWidth={'75%'}
          mx={0}
          textAlign={'start'}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card 
          square={ true }
          sx={{
            minHeight: 200,
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid #ccc',
          }}>
          <CardContent>
            <IconButton>
              <SportsGymnasticsIcon 
                fontSize="large"
                color="secondary" />
            </IconButton>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Gym
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card 
          square={ true }
          sx={{ 
            minHeight: 200,
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center', 
            border: '1px solid #ccc'
          }}>
          <CardContent>
            <IconButton>
              <LocalParkingIcon 
                fontSize="large"
                color="secondary" />
            </IconButton>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Parking
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={2}
        sx={{
          display: {xs: 'none', sm: 'block'},
        }}  
      >
        <Card 
          square={ true }
          sx={{ 
            boxShadow: 'none',
            minHeight: 180,
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}>
          <CardContent>
            <ArrowCircleRightRoundedIcon
              fontSize="large"
              color="secondary" />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>    
        <Card 
          square={ true }
          sx={{ 
            minHeight: 200,
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center', 
            border: '1px solid #ccc'
          }}>
          <CardContent>
            <IconButton>
              <FastfoodOutlinedIcon
                fontSize="large"
                color="secondary" />
            </IconButton>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Local Dining
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card 
          square={ true }
          sx={{ 
            minHeight: 200,
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',                    
            border: '1px solid #ccc',
          }}
        >
          <CardContent>
            <IconButton>
              <PoolOutlinedIcon 
                fontSize="large"
                color="secondary" />
            </IconButton>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Swimming Pool
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card 
          square={ true }
          sx={{ 
            minHeight: 200,
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center', 
            border: '1px solid #ccc',
          }}>
          <CardContent>
            <IconButton>
              <WifiPasswordIcon
                fontSize="large"
                color="secondary" />
            </IconButton>
            <Typography 
              variant="h5" 
              component="p"
              sx={{
                fontWeight: 700,
                textTransform: 'capitalize',
              }}
            >
              Internet
            </Typography>
          </CardContent>
        </Card>
      </Grid> 
    </Grid>
  );
}

export default Content;
