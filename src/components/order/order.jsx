import React from "react";
import { FaTrash } from "react-icons/fa";

function Order(props) {
  const { item, onDelete } = props;

  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="item">
      <img src={item.img} alt={item.desc}></img>
      <h2>{item.title}</h2>
      <p>{item.price}&#8381;</p>
      <FaTrash className="delete-icon" onClick={handleDelete} />
    </div>
  );
}

export default Order;
