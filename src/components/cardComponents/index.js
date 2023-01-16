import React  from "react";
import Items from "../../features/Items";
import { Grid } from "@mui/material";

const CardComponents = ({cardItems}) => {


  return (
    <Grid container gap={3} sm={12} padding="20px 220px 10px 220px" backgroundColor="#F6F9FC" >
      {cardItems.map((item) => {
        return (
             <Items name={item.name} image={item.image} price={item.price} category={item.category} color={Items.color}/>
        );
      })}
    </Grid>
  );
};

export default CardComponents;
