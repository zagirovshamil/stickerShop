import { useState } from "react";

import { Footer } from "../../footer";
import { Categories } from "../../ui";
import { homePageItems } from "../../../constants";
import { ProductList } from "../../product-list/product-list";
import { Header } from "../../header/header";

export const HomePage = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(homePageItems);

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

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <ProductList items={currentItems} onAdd={addToOrder} />
      <Footer />
    </div>
  );
};
