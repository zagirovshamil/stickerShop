import { useState, Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Order } from "../order/order";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  // const navigation = [
  //   { name: "Про меня", href: "#", current: "false" },
  //   { name: "Отзывы", href: "#", current: "false" },
  //   { name: "Корзина", href: "#", current: "false" },
  //   { name: "Контакты", href: "#", current: "false" },
  // ];

  const [cartOpen, setCartOpen] = useState(false);
  console.log("orders", props.orders);

  const showOrders = (props) => {
    let subtotal = 0;
    props.orders.forEach((el) => (subtotal += Number.parseFloat(el.price)));
    return (
      <div className="shop-cart">
        {props.orders.map((el) => (
          <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}

        <p className="subtotal">
          Сумма: {new Intl.NumberFormat().format(subtotal)} &#8381;
        </p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Корзина пуста</h2>
      </div>
    );
  };

  return (
    <header>
      <div className="wrapper">
        <span className="logo" onClick={goHome}>
          that.girl.shop
        </span>
        <ul className="nav">
          <li>Про меня</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <AiOutlineShoppingCart
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};
