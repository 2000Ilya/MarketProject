import React from "react";
import CatalogSection from "../../components/CatalogSection/CatalogSection";
import Tabs from "../../components/Tabs/Tabs";
import products from "../../products";

import "./MainPage.css";

// const products = [{name:, imgSrc:, price:, salePrice:, parameters:{country:,type:,toxicity:,volume:}}]

function MainPage() {
  return (
    <div className="main-page">
      <Tabs />
      <CatalogSection
        sectionName={"Вино"}
        sectionProducts={products.filter(
          (product) => product.category === "wine"
        )}
      />
      <CatalogSection
        sectionName={"Шампанское и игристое"}
        sectionProducts={products.filter(
          (product) => product.category === "champagne"
        )}
      />
      <CatalogSection
        sectionName={"Крепкий алкоголь"}
        sectionProducts={products.filter(
          (product) => product.category === "strong"
        )}
      />
      <CatalogSection
        sectionName={"Пиво"}
        sectionProducts={products.filter(
          (product) => product.category === "beer"
        )}
      />
    </div>
  );
}

export default MainPage;
