import { Box } from "@mui/material";
import { styled } from "@mui/material";

export const Navbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 200px",
  // border:"2px solid red",

});

export const SearchContainer = styled(Box)({
  button: {
    color:"black",
    width: "200px",
    height: "43px",
    position: "relative",
    right: "200px",
    bottom: "2px",
    borderRadius: "0 50px 50px 0",
    border:"1px solid black",
    backgroundColor:"#F6F9FC",
  },
});

export const InputField = styled("input")({
  fontSize: "20px",
  color: "black",
  fontWeight: "bold",
  width: "500px",
  padding: "10px 220px 10px 40px",
  borderRadius: "50px",
  border:"1px solid black"
  
  
});
