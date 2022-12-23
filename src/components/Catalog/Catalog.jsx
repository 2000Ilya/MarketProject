import { observer } from "mobx-react-lite";
import React from "react";
import ProductItem from "../ProductItem/ProductItem";

function Catalog({ store }) {
  return (
    <div className="catalog">
      {store.products.map((product) => (
        <ProductItem {...product} />
      ))}
    </div>
  );
}

export default observer(Catalog);
