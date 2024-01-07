import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MySlider } from "../slick-slider/Slick";

export const ProductItem = (props) => {
  const { item, onClickItem, onAdd } = props;

  return (
    <div className="item">
      <MySlider>
        {item.sliderImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={index} />
          </div>
        ))}
      </MySlider>
      <h2> {item.title} </h2>
      <p>{item.desc}</p>
      <p>{item.price}&#8381;</p>
      <button onClick={() => onClickItem(item.id)}>Открыть</button>
      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        className="add-to-card"
        style={{ marginLeft: 15, color: "black" }}
        onClick={() => onAdd(item)}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
};
