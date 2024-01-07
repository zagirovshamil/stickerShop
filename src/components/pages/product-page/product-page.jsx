import { useState } from "react";
import { useParams } from "react-router-dom";
import { homePageItems } from "../../../constants";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MySlider } from "../../slick-slider/Slick";
import { Header } from "../../header/header";
import { Footer } from "../../footer";

// styled components css in js

export const ProductPage = (props) => {
  const { onAdd, item } = props;
  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    const isInArray = orders.some((el) => el.id === item.id);

    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const { id } = useParams();
  const productData = homePageItems.find((item) => item.id === Number(id));

  return (
    <>
      <Header orders={orders} onAdd={onAdd} onDelete={deleteOrder} />
      <div className="item">
        <MySlider style={{ marginBottom: 15 }}>
          {productData.sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={index} />
            </div>
          ))}
        </MySlider>
        <div className="items">
          <h2>{productData.title}</h2>
          <p>{productData.desc}</p>
          <p>{productData.price}&#8381;</p>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            className="add-to-card"
            style={{ color: "black", width: 29 }}
            onClick={() => {
              addToOrder(productData.item);
            }}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </div>
      </div>
      <Footer />
    </>
  );
};
