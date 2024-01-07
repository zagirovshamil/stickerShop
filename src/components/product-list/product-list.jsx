import { useNavigate } from "react-router-dom";
import { ProductItem } from "../product-item/product-item";

export const ProductList = (props) => {
  const navigate = useNavigate();

  const handleClickItem = (id) => {
    navigate(`/product/${id}`);
  };

  // Стили прописать так, чтобы при наведении на карточку товара, у тебя картинка менялась и менялся scale
  // Подумай, как сделать каталог, как это можно сделать
  // Пересмотри верстку

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
