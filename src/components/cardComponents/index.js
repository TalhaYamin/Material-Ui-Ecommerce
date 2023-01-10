import React, { useState } from "react";
import image1 from "../../assets/1.webp";
import Items from "../../features/Items";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const CardComponents = () => {
  const [cardItems, sercCardItems] = useState([
    {
      name: "Capgnold WX-R",
      image: image1,
      price: "85$",
    },
    {
      name: "Hero 2017",
      image: image1,
      price: "175$",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
    },
  ]);
  return (
    <Grid container gap={4} padding="10px 200px 10px 200px" backgroundColor="#F6F9FC">
      {cardItems.map((item) => {
        return (
             <Items name={item.name} image={item.image} price={item.price} />
        );
      })}
    </Grid>
  );
};

export default CardComponents;
