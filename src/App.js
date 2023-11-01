import { React, useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Items from "./components/items/Items";
import Categories from "./components/categories/categories";
import ShowFullItem from "./components/show-full-item/show-full-item.component";
import { imgMap } from "./utils";

const App = () => {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [items] = useState([
    {
      id: 1,
      title: "Мини-пак Flowers",
      img: imgMap.flowers,
      desc: "Небольшой цветочный пак со стикерами",
      category: "Мини-пак",
      price: 100,
    },
    {
      id: 2,
      title: "Мини-пак Storm",
      img: imgMap.storm,
      desc: "Небольшой душевный пак со стикерами",
      category: "Мини-пак",
      price: 100,
    },
    {
      id: 3,
      title: "Открытка Autumn’s magic",
      img: imgMap.autumn,
      desc: "Осенняя открытка",
      category: "Открытка",
      price: 100,
    },
    {
      id: 4,
      title: "Открытка Picnic",
      img: imgMap.picnic,
      desc: "Летняя открытка на тему пикника",
      category: "Открытка",
      price: 100,
    },
    {
      id: 5,
      title: "Открытка Pumpkin spice",
      img: imgMap.pumnkin,
      desc: "Осенняя открытка",
      category: "Открытка",
      price: 100,
    },
    {
      id: 6,
      title: "Открытка You are miracle",
      img: imgMap.miracle,
      desc: "Ты чудо и этим все сказано",
      category: "Открытка",
      price: 100,
    },
    {
      id: 7,
      title: "Стикерпак Fairy garden",
      img: imgMap.fairy,
      desc: "Стикерпак для Феечек",
      category: "Стикерпак",
      price: 180,
    },
    {
      id: 8,
      title: "Стикерпак Plan for autumn",
      img: imgMap.plan,
      desc: "Стикерпак с планами на осень",
      category: "Стикерпак",
      price: 220,
    },
    {
      id: 9,
      title: "Стикерпак We",
      img: imgMap.we,
      desc: "Любовный стикерпак для тебя и твоего краша",
      category: "Стикерпак",
      price: 220,
    },
  ]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  useState(() => {
    setCurrentItems(items);
  }, [items]);

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
      setCurrentItems(items);
      return;
    }

    setCurrentItems(items.filter((el) => el.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />

      {showFullItem && (
        <ShowFullItem
          onAdd={addToOrder}
          onShowItem={onShowItem}
          item={fullItem}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
