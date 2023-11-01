import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={this.props.item.img}
          alt={this.props.item.desc}
          onClick={() => this.props.onShowItem(this.props.item)}
        ></img>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <p>{this.props.item.price}&#8381;</p>

        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          className="add-to-card"
          style={{ marginLeft: 15, color: "black" }}
        >
          <AddShoppingCartIcon
            onClick={() => this.props.onAdd(this.props.item)}
          />
        </IconButton>
      </div>
    );
  }
}

export default Item;
