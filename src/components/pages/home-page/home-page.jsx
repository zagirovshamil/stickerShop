import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "../../header/header";
import { Footer } from "../../footer";

import { Categories } from "../../ui";
// import ShowFullItem from "./components/show-full-item/show-full-item.component";
import { homePageItems } from "../../../constants";
import { ProductList } from "../../product-list/product-list";

export const HomePage = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(homePageItems);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = (item) => {
    const isInArray = orders.some((el) => el.id === item.id);
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((el) => el.id !== id));
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(homePageItems);
      return;
    }
    setCurrentItems(homePageItems);
    setCurrentItems((prevState) => {
      return prevState.filter((el) => el.category === category);
    });
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <ProductList
        onShowItem={onShowItem}
        items={currentItems}
        onAdd={addToOrder}
      />

      {/* {showFullItem && (
        <ShowFullItem
          onAdd={addToOrder}
          onShowItem={onShowItem}
          item={fullItem}
        />
      )} */}
      <Footer />
    </div>
  );
};
