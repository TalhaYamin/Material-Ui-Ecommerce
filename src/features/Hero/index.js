import React from "react";
import { Box, Grid } from "@mui/material";
import ManIcon from "@mui/icons-material/Man";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import WeekendIcon from "@mui/icons-material/Weekend";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import WomanIcon from "@mui/icons-material/Woman";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import EarbudsBatteryIcon from "@mui/icons-material/EarbudsBattery";
import CableIcon from "@mui/icons-material/Cable";
import HardwareIcon from "@mui/icons-material/Hardware";

const Hero = ({ handleCategory }) => {
  const categ = [
    {
      label: "Bike",
      value: "bike",
      icon: ManIcon,
    },
    {
      label: "Cycle",
      value: "cycle",
      icon: TwoWheelerIcon,
    },
    {
      label: "Car",
      value: "car",
      icon: DirectionsCarIcon,
    },
    {
      label: "Cloths",
      value: "cloths",
      icon: CheckroomIcon,
    },

    {
      label: "Furniture",
      value: "Furniture",
      icon: WeekendIcon,
    },

    {
      label: "Sports",
      value: "Sports",
      icon: SportsBaseballIcon,
    },

    {
      label: "Women",
      value: "women",
      icon: WomanIcon,
    },

    {
      label: "Automobile",
      value: "automobile",
      icon: AirportShuttleIcon,
    },
    {
      label: "Accessories",
      value: "accessories",
      icon: EarbudsBatteryIcon,
    },
    {
      label: "Electronics",
      value: "electronics",
      icon: CableIcon,
    },
    {
      label: "Hardware",
      value: "hardware",
      icon: HardwareIcon,
    },
  ];

  return (
    <Grid
      gap={5}
      backgroundColor="white"
      height="80px"
      display="flex"
      alignItems="center"
      padding="0 250px "
      border="1px solid #F6F9FC"
    >
      {categ.map((c) => {
        return (
          <Box
            textAlign="center"
            sx={{
              "&:hover": {
                color: "red",
                cursor: "pointor",
              },
            }}
          >
            <c.icon onClick={() => { handleCategory(c.value); }}/>
            {c.label}
          </Box>
        );
      })}
    </Grid>
  );
};

export default Hero;
