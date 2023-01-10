import { Box } from "@mui/material";
import { styled } from "@mui/material";

export const Navbar = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 200px",
  border:"1px solid #F6F9FC",
});

export const SearchContainer = styled(Box)({
  button: {
    color:"black",
    width: "200px",
    height: "55px",
    position: "relative",
    right: "200px",
    bottom: "3px",
    borderRadius: "0 50px 50px 0",
    border:"1px solid grey",
    backgroundColor:"#F6F9FC",
  },
});

export const InputField = styled("input")({
  fontSize: "20px",
  color: "green",
  fontWeight: "bold",
  width: "600px",
  padding: "15px",
  borderRadius: "50px",
  // borderRadius:16px,
});
