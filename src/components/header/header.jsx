import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Order from "../order/order";

const showOrders = (props) => {
  let subtotal = 0;
  props.orders.forEach((el) => (subtotal += Number.parseFloat(el.price)));
  return (
    <div>
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

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">that.girl.shop</span>
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
}
