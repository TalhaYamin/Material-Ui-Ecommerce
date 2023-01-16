import React, { useState } from "react";
import CardComponents from "../../components/cardComponents";
import NavBar from "../../components/NavBar";
import Footer from "../../features/Footer";
import Hero from "../../features/Hero";
import image1 from "../../assets/1.webp";

const HomePage = () => {
  const [cardItems, setCardItems] = useState([
    {
      name: "Capgnold WX-R",
      image: image1,
      price: "85$",
      category: "cycle",
      color: "red",
    },
    {
      name: "Hero 2017",
      image: image1,
      price: "175$",
      category: "cycle",
      color: "black",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "Furniture",
      color: "red",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "bike",
      color: "black",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "cycle",
      color: "green",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "Sports",
      color: "red",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "bike",
      color: "green",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "cloths",
      color: "red",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "bike",
      color: "black",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "Furniture",
      color: "black",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "car",
      color: "red",
    },
    {
      name: "Spec 2019",
      image: image1,
      price: "114$",
      category: "car",
      color: "green",
    },
  ]);

  const [filteredData, setFilteredData] = useState(cardItems);

  const handleCategory = (category) => {
    const fData = cardItems.filter((item) => item.category.includes(category));
    setFilteredData(fData);
  };

  const handleColor = (color) => {
    const fcolor = cardItems.filter((item) => item.color.includes(color));
    setFilteredData(fcolor);
  };

  return (
    <div>
      <NavBar handleColor={handleColor} />
      <Hero handleCategory={handleCategory} />
      <CardComponents cardItems={filteredData} />
      <Footer />
    </div>
  );
};

export default HomePage;
