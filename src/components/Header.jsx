import React from "react";
import { Box, styled, Typography } from "@mui/material";
import backgroundImage from '../assets/background.jpg'; // Make sure to adjust the path as necessary

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "100vh", // Set to 100vh to cover the entire viewport height
    display: "flex",
    flexDirection: "column", // Ensure column layout
    justifyContent: "center",
    alignItems: "center", // Center horizontally
    gap: theme.spacing(2),
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, // Correctly format the backgroundImage
    backgroundSize: "cover", // Ensures the image covers the entire background
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat",
    textAlign: "center", // Center text
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }));

  const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: "#fff",
    marginBottom: theme.spacing(1), // Reduced margin
  }));

  const SubText = styled(Typography)(({ theme }) => ({
    lineHeight: 1.6,
    color: "#fff",
  }));

  return (
    <CustomBox component="header">
      {/* Box text */}
      <BoxText component="section">
        <Heading variant="h2" component="h1">
          Let's configure your car with us
        </Heading>
        <SubText component="p">
          We have 500+ happy customers who trust in our service.
        </SubText>
      </BoxText>
    </CustomBox>
  );
};

export default Header;
