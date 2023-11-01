import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ShowFullItem = (props) => {
  return (
    <div className="full-item">
      <div>
        <img
          src={props.item.img}
          alt={props.item.desc}
          onClick={() => props.onShowItem(props.item)}
        ></img>
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <p>{props.item.price}&#8381;</p>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          className="add-to-card"
          style={{ marginLeft: 15, color: "black" }}
        >
          <AddShoppingCartIcon onClick={() => props.onAdd(props.item)} />
        </IconButton>
      </div>
    </div>
  );
};

export default ShowFullItem;
