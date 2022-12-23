import React from "react";
import { observer } from "mobx-react-lite";
import CartForm from "../../components/CartForm/CartForm";
import CartItem from "../../components/CartItem/CartItem";
import NavBack from "../../components/NavBack/NavBack";

import "./CartPage.css";

const CartPage = observer(({ store }) => {
  return (
    <div className="cart-page">
      <div className="cart-page__content">
        <NavBack text={"Назад"} linkTo={"/"} />
        {store.productsQuantity > 0 ? (
          <div className="cart-page__mid-group">
            <CartList
              products={store.cartProducts}
              addProduct={(id) => store.addCartProduct(id)}
              deleteProduct={(id) => store.deleteCartProduct(id)}
            />
            <CartForm
              quantity={store.productsQuantity}
              resultPrice={store.resultPrice}
            />
          </div>
        ) : (
          <h1 className="catalog-section__title">{"Корзина пуста"}</h1>
        )}
      </div>
    </div>
  );
});

const CartList = ({ products, addProduct, deleteProduct }) => (
  <div className="cart-page__products-group">
    {products.map(
      (product) =>
        product.count > 0 && (
          <CartItem
            key={product.id}
            {...product}
            addProduct={() => addProduct(product.id)}
            deleteProduct={() => deleteProduct(product.id)}
            quantity={product.count}
          />
        )
    )}
  </div>
);

export default CartPage;
