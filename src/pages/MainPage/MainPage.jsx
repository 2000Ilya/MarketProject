import React from "react";
import { observer } from "mobx-react-lite";
import CatalogSection from "../../components/CatalogSection/CatalogSection";
import Tabs from "../../components/Tabs/Tabs";
import { Catalog } from "../CatalogPage/CatalogPage";
import { categoryToSectionNameConverter } from "../../helpers/catalogSectionHelper";

import "./MainPage.css";

function MainPage({ store }) {
  return (
    <div className="main-page">
      <Tabs
        changeCategory={(category) => store.setCategory(category)}
        changeSearchName={(searchName) => store.changeSearchName(searchName)}
        searchName={store.searchName}
      />
      {store.searchName && store.searchName.length > 0 ? (
        <Catalog products={store.productsFiltered} />
      ) : (
        <CatalogSection
          sectionName={categoryToSectionNameConverter(store.category)}
          sectionProducts={store.products.filter(
            (product) => product.category === store.category
          )}
        />
      )}
    </div>
  );
}

export default observer(MainPage);
