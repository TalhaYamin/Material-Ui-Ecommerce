import { Typography, Box } from "@mui/material";
import React from "react";
import { FooterStyle } from "./styled";
import logo from "../../assets/logo2.svg";

const Footer = () => {
  return (
    <FooterStyle>
      <Box>
        <img src={logo} />
        <Typography variant="p" color="#4F5661" display="block" width="80%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </Typography>
      </Box>
      <Box>
        <Typography varient="h4" color="white" marginBottom="15px">About Us</Typography>
        <Typography varient="p" color="#4F5661">Careers</Typography>
        <Typography varient="p" color="#4F5661">Our Stories</Typography>
        <Typography varient="p" color="#4F5661">Our Cares</Typography>
        <Typography varient="p" color="#4F5661">Terms and Condition</Typography>
        <Typography varient="p" color="#4F5661">Privacy Policy</Typography>
      </Box>
      <Box>
      <Typography varient="h4" color="white" marginBottom="15px">Customer Care</Typography>
        <Typography varient="p" color="#4F5661">Careers</Typography>
        <Typography varient="p" color="#4F5661">Our Stories</Typography>
        <Typography varient="p" color="#4F5661">Our Cares</Typography>
        <Typography varient="p" color="#4F5661">Terms and Condition</Typography>
        <Typography varient="p" color="#4F5661">Privacy Policy</Typography>
      </Box>
      <Box>
      <Typography varient="h4" color="white" marginBottom="15px">Contact Us</Typography>
        <Typography varient="p" color="#4F5661">Careers</Typography>
        <Typography varient="p" color="#4F5661">Our Stories</Typography>
        <Typography varient="p" color="#4F5661">Our Cares</Typography>
        <Typography varient="p" color="#4F5661">Terms and Condition</Typography>
        <Typography varient="p" color="#4F5661">Privacy Policy</Typography>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
