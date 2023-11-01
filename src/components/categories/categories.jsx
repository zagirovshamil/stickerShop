import React from "react";

const Categories = (props) => {
  const categories = [
    {
      key: "all",
      name: "Всё",
    },
    {
      key: "Мини-пак",
      name: "Мини-пак",
    },
    {
      key: "Открытка",
      name: "Открытка",
    },
    {
      key: "Стикерпак",
      name: "Стикерпак",
    },
  ];

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
