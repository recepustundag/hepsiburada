import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../actions/product";
import { order_sorts } from "../utils/helper";

const Filter = React.lazy(() => import("./Filter"));
const Products = React.lazy(() => import("./Products"));

const Wrapper = () => {
  const { filters, searchKey } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <>
      <div className="subheader">
        <div className="detail" data-testid="subheaderTitle">
          {filters.brand !== "" ? <h1>{filters.brand} cep telefonu</h1> : <h1>Tüm marka cep telefonları</h1>}

          <span>
            Aranan Kelime:
            {searchKey !== "" && <strong>{searchKey}</strong>}
          </span>
        </div>
        <div className="sort">
          <select data-testid="subheaderFilterSelect" value={filters["order"]} onChange={(e) => dispatch(addFilter({ type: "order", value: e.target.value }))}>
            <option value="">Sıralama</option>
            {order_sorts().map((item) => {
              return (
                <option data-testid="subheaderFilterOption" key={item.id} value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="wrapper">
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Filter />
          <Products />
        </Suspense>
      </div>
    </>
  );
};

export default Wrapper;
