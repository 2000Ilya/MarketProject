import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

import "./CatalogSection.css";

function CatalogSection({ sectionName, sectionProducts }) {
  return (
    <div className="catalog-section">
      <h1 className="catalog-section__title">{sectionName}</h1>
      <div className="catalog-section__products-group">
        {sectionProducts &&
          sectionProducts.map((product) => <ProductItem {...product} />)}
      </div>
      <Link className="catalog-section__catalog-link" to={"/catalog"}>
        {"Перейти в каталог"}
      </Link>
    </div>
  );
}

export default CatalogSection;
