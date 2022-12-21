import React from "react";
import ProductItem from "../../components/ProductItem/ProductItem";

// const products = [{name:, imgSrc:, price:, salePrice:, parameters:{country:,type:,toxicity:,volume:}}]
const products = [
  {
    name: "Herederos del Marques de Riscal Sauvignon DO, 0.75 л",
    imgSrc: "",
    price: "2601 р.",
    salePrice: "2890 р.",
    parameters: {
      country: "Испания",
      type: "Белое",
      toxicity: "13%",
      volume: "0.75 л",
    },
  },
];

function MainPage() {
  return (
    <>
      <div>MainPage</div>
      {products.map((product, index) => (
        <ProductItem {...product} key={index} />
      ))}
    </>
  );
}

export default MainPage;
