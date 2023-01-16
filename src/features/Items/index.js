import { Box, Rating, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";


const Items = ({name, image, price}) => {
  return (
        <Box  backgroundColor="white" padding="10px 20px 10px 20px" >
          <img src={image} alt="/" width="250px" />
          <Typography variant="h3" fontSize={14} fontWeight={400}>
            {name}
          </Typography>

          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" fontSize={14} color="red">
              {price}
            </Typography>
            <AddCircleIcon />
          </Box>
        </Box>
  );
};

export default Items;
