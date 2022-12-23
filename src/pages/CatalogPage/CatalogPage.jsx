import React from "react";
import { observer } from "mobx-react-lite";
import ProductItem from "../../components/ProductItem/ProductItem";

import "./CatalogPage.css";

export const CatalogPage = observer(({ store }) => {
  return (
    <div className="catalog-container">
      <Catalog products={store.products} />
    </div>
  );
});

export const Catalog = ({ products }) => (
  <div className="catalog">
    {products.map((product, index) => (
      <ProductItem key={index} {...product} />
    ))}
  </div>
);
