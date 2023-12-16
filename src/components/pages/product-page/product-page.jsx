import { ProductItem } from "../../product-item/product-item";
import { useParams } from "react-router-dom";
import { homePageItems } from "../../../constants";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { MySlider } from "../../slick-slider/Slick";
import { Header } from "../../header/header";

//
export const ProductPage = () => {
  const { id } = useParams();
  const productData = homePageItems.find((item) => item.id === Number(id));
  console.log("productData", productData.id);
  console.log("id", id);

  return (
    <>
      <Header />
      <div className="item">
        <MySlider>
          {productData.sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={index} />
            </div>
          ))}
        </MySlider>
        <h2> {productData.title} </h2>
        <p>{productData.desc}</p>
        <p>{productData.price}&#8381;</p>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          className="add-to-card"
          style={{ marginLeft: 15, color: "black" }}
          onClick={() => {}}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </>
  );
};
