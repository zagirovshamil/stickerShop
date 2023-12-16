import React from "react";
import Item from "./Item";

// переименовать в Product-list и вынести отсюда Item
export const Items = (props) => {
  return (
    <main>
      {props.items.map((el) => (
        <Item
          onShowItem={props.onShowItem}
          key={el.id}
          item={el}
          onAdd={props.onAdd}
        />
      ))}
    </main>
  );
};
