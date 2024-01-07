import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MySlider from "../slick-slider/Slick";
import { imgMap } from "../../utils/index";

// Переименовать в ProductItem и вынести из папки Product-List
export const Item = (props) => {
  const { item, onAdd } = props;

  const handleAddToCart = () => {
    onAdd(item);
  };

  return (
    <div className="item">
      <MySlider className="item-image">
        {item.sliderImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={index} />
          </div>
        ))}
      </MySlider>
      <h2> {item.title} </h2>
      <p>{item.desc}</p>
      <p>{item.price}&#8381;</p>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        className="add-to-card"
        style={{ marginLeft: 15, color: "black" }}
        onClick={handleAddToCart}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};
