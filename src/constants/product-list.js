// import React from "react";

// items: [
//   {
//     id: 1,
//     title: "Мини-пак Flowers",
//     img: imgMap.flowers,
//     desc: "Небольшой цветочный пак со стикерами",
//     category: "Мини-пак",
//     price: 100,
//   },
//   {
//     id: 2,
//     title: "Мини-пак Storm",
//     img: "./img/Мини-пак Storm.jpg",
//     desc: "Небольшой душевный пак со стикерами",
//     category: "Мини-пак",
//     price: 100,
//   },
//   {
//     id: 3,
//     title: "Открытка Autumn’s magic",
//     img: "./img/Открытка Autumn’s magic.jpg",
//     desc: "Осенняя открытка",
//     category: "Открытка",
//     price: 100,
//   },
//   {
//     id: 4,
//     title: "Открытка Picnic",
//     img: "./img/Открытка Picnic.jpg",
//     desc: "Летняя открытка на тему пикника",
//     category: "Открытка",
//     price: 100,
//   },
//   {
//     id: 5,
//     title: "Открытка Pumpkin spice",
//     img: "./img/Открытка Pumpkin spice.jpg",
//     desc: "Осенняя открытка",
//     category: "Открытка",
//     price: 100,
//   },
//   {
//     id: 6,
//     title: "Открытка You are miracle",
//     img: "./img/Открытка You are a miracle.jpg",
//     //
//     desc: "Ты чудо и этим все сказано",
//     category: "Открытка",
//     price: 100,
//   },
//   {
//     id: 7,
//     title: "Стикерпак Fairy garden",
//     img: "./img/Стикерпак Fairy garden.jpg",
//     desc: "Стикерпак для Феечек",
//     category: "Стикерпак",
//     price: 180,
//   },
//   {
//     id: 8,
//     title: "Стикерпак Plan for autumn",
//     img: "./img/Стикерпак Plan for autumn.jpg",
//     desc: "Стикерпак с планами на осень",
//     category: "Стикерпак",
//     price: 220,
//   },
//   {
//     id: 9,
//     title: "Стикерпак We",
//     img: "./img/Стикерпак We.jpg",
//     desc: "Любовный стикерпак для тебя и твоего краша",
//     category: "Стикерпак",
//     price: 220,
//   },
// ],
//   items.map((el) => (
//     <Item onShowItem={el.onShowItem} key={el.id} item={el} onAdd={el.onAdd} />
//   ));

// export default function productlist() {
//   return (
//     <div className="item">
//       <img
//         src={this.props.item.img}
//         alt={this.props.item.desc}
//         onClick={() => this.props.onShowItem(this.props.item)}
//       ></img>
//       <h2>{this.props.item.title}</h2>
//       <p>{this.props.item.desc}</p>
//       <p>{this.props.item.price}&#8381;</p>
//       <div
//         className="add-to-card"
//         onClick={() => this.props.onAdd(this.props.item)}
//       >
//         +
//       </div>
//     </div>
//   );
// }
