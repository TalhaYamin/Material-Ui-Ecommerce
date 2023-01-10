import React from "react";
import { Navbar, SearchContainer, InputField } from "./styled";
import { Box, Button, Avatar, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo2.svg";

const NavBar = () => {
  return (
    <Navbar backgroundColor="white">
      <Box>
        <img src={logo} />
      </Box>
      <SearchContainer >
        <InputField placeholder="searching for..." />
        <Button>All Categories</Button>
      </SearchContainer>

      <Box display="flex" width="90px" justifyContent="space-between">
        <Avatar src="/broken-image.jpg" />
        <IconButton aria-label="cart">
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    </Navbar>
  );
};
export default NavBar;
