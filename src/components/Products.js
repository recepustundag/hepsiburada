import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { perPage } from "../utils/helper";
import Pagination from "./Pagination";

const Product = React.lazy(() => import("./Product"));

const Products = () => {
  const { products, searchList, notFound, currentPage } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.cart);

  let product_items = [];

  if (searchList != null && searchList.length > 0) {
    product_items = searchList;
  } else if (notFound) {
    product_items = [];
  } else {
    product_items = products;
  }

  let productData = product_items;

  if (product_items.length > 0 && product_items.length >= perPage) {
    if (currentPage === 1) {
      productData = product_items.slice(0, perPage);
    } else {
      productData = product_items.slice(perPage * (currentPage - 1), perPage * currentPage);
    }
  }

  return (
    <>
      <div className="products">
        <Suspense fallback={<div>Yükleniyor...</div>}>
          {productData.length > 0 ? (
            productData.map((product) => <Product key={product.id} product={product} isCart={cart.findIndex((item) => item.id === product.id)} />)
          ) : (
            <div>Aradığınız kriterlerde ürün</div>
          )}
        </Suspense>
      </div>
      <div></div>
      {product_items.length > 0 && product_items.length > perPage && <Pagination data={product_items} />}
    </>
  );
};

export default Products;
