import { useNavigate } from "react-router-dom";
import { ProductItem } from "../product-item/product-item";

export const ProductList = (props) => {
  const navigate = useNavigate();

  const handleClickItem = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <main>
      {props.items.map((el) => (
        <ProductItem
          onClickItem={handleClickItem}
          key={el.id}
          item={el}
          onAdd={props.onAdd}
        />
      ))}
    </main>
  );
};
