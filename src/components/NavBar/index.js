import React, { useState } from "react";
import { Navbar, SearchContainer, InputField } from "./styled";
import { Box, Button, Avatar, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo2.svg";
import { Select, MenuItem } from "@mui/material";

const NavBar = ({ handleColor}) => {
  const [search, setSearch] = useState("");



  const handleSubmit = (e) => {
    console.log("www");
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <Box>
      <h1>{search}</h1>
      <Navbar backgroundColor="white">
        <Box>
          <img src={logo} />
        </Box>
        <SearchContainer>
          <InputField onChange={handleSubmit} placeholder="searching for..." />
          <Button>All Categories</Button>
        </SearchContainer>

        <Box display="flex" width="90px" gap={3} alignItems="center">
        <Select>
          <MenuItem onClick={()=>handleColor("red")}>Red</MenuItem>
          <MenuItem onClick={()=>handleColor("black")}>Black</MenuItem>
          <MenuItem onClick={()=>handleColor("green")}>Green</MenuItem>
        </Select>


          <Avatar/>
          <IconButton aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Navbar>
    </Box>
  );
};
export default NavBar;
