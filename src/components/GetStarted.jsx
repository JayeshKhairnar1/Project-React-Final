import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/maruti_swift_lxi.jpeg';
import imgDetail2 from '../assets/maruti_swift_zxi.jpeg';

const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component='section'
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Customize Your Dream Vehicle'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Our vehicle configurator makes it easy for you to design and customize your perfect vehicle. Explore a wide range of options and features to create a vehicle that reflects your unique style and preferences.
                    </CustomTypography> 
                </Box>
            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Get Expert Assistance'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Connect with our experienced agents who are dedicated to helping you through the customization process. Our experts are here to ensure you make the best choices for your vehicle, providing you with personalized support every step of the way.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;
