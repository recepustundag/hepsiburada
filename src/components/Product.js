import React from "react";
import { useDispatch } from "react-redux";
import { AddToCart } from "../actions/cart";

import { formatMoney, percentage } from "../utils/helper";

const Product = ({ product, isCart }) => {
  const dispatch = useDispatch();
  const { title, image, price, brand, color, discount_price } = product;
  
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img data-testid="productImage" src={image} alt={title} />
      </div>
      <div className="product-card__content">
        <div className="product-card__title">
          <h3 data-testid="productTitle">{title}</h3>
        </div>
        <div className="product-card__category">
          <div data-testid="productBrand">
            <strong>Marka:</strong> {brand}
          </div>
          <div data-testid="productColor">
            <strong>Renk:</strong> {color}
          </div>
        </div>
        <div className="product-card__price">
          <span className="product-card__price-price" data-testid="productPrice">{formatMoney(price)} TL</span>
          {discount_price && (
            <div>
              <span className="product-card__price-oldprice">{formatMoney(discount_price)} TL</span>
              <span className="product-card__price-percent">{percentage(price, discount_price)}%</span>
            </div>
          )}
        </div>
        <div className="product-card__button">
          <button type="button" onClick={() => dispatch(AddToCart(product))} className={`${isCart > -1 ? "added" : ""}`} data-testid="addProduct">
            {isCart > -1 ? "Bu ürünü sepete ekleyemezsiniz" : "Sepete Ekle"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
