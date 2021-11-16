import React from "react";
import FilterItem from "./FilterItem";

/* icons */
import filterIcon from "../assets/images/filter.svg";
import { brand, colors, order_sorts } from "../utils/helper";

const Filter = () => {
  return (
    <div className="filter">
      <div className="desktop">
        <FilterItem title="Renk" type="color" items={colors()} />
        <FilterItem title="Sıralama" type="order" items={order_sorts()} />
        <FilterItem title="Marka" type="brand" items={brand()} />
      </div>
      <div className="mobile">
        <button data-testid="filterMobileIcon">
          <img src={filterIcon} alt="filter" width="17" height="17" />
          Filtrele
        </button>
        <div className="content">
          <FilterItem title="Renk" type="color" items={colors()} />
          <FilterItem title="Sıralama" type="order" items={order_sorts()} />
          <FilterItem title="Marka" type="brand" items={brand()} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
