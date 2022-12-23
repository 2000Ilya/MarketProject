import { action, computed, makeObservable, observable, reaction } from "mobx";
import products from "./products";

class MarketStore {
  products = products;
  // _cartProducts = [{ id: 1, count: 1 }];
  _cartProducts = [];
  _searchName = "";
  _category = "wine";

  constructor() {
    makeObservable(this, {
      _category: observable,
      _searchName: observable,
      _cartProducts: observable,
      searchName: computed,
      category: computed,
      productsFiltered: computed,
      cartProducts: computed,
      productsQuantity: computed,
      setCategory: action,
      changeSearchName: action,
      addCartProduct: action,
      deleteCartProduct: action,
    });
  }

  get cartProducts() {
    return this._cartProducts.map((cartProduct) => {
      const productIndex = products.find(
        (product) => product.id === cartProduct.id && product.count > 0
      );
      return products[productIndex];
    });
  }

  get productsFiltered() {
    console.log(this.searchName);
    if (this.searchName !== undefined && this.searchName.length > 0) {
      return this.products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.searchName.toLowerCase());
      });
    }
    return this.products;
  }

  get productsQuantity() {
    return this._cartProducts.reduce((acc, curElem) => acc + curElem.count, 0);
  }

  get category() {
    return this._category;
  }

  get searchName() {
    return this._searchName;
  }

  setCategory(category) {
    console.log(category);
    this._category = category;
  }

  changeSearchName(searchName) {
    this._searchName = searchName;
  }

  addCartProduct(index) {
    this._cartProducts.map((cartProduct) => {
      if (cartProduct.id === index) {
        if ("count" in cartProduct) {
          cartProduct["count"] += 1;
        } else {
          cartProduct["count"] = 1;
        }
      }
      return cartProduct;
    });
  }

  deleteCartProduct(index) {
    this._cartProducts.map((cartProduct) => {
      if (cartProduct.id === index) {
        if ("count" in cartProduct && cartProduct["count"] > 0) {
          cartProduct["count"] -= 1;
        }
      }
      return cartProduct;
    });
  }
}

export default new MarketStore();
