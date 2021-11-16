import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter} from "../actions/product";

const FilterItem = ({ title, type, items }) => {
  const {products, filters, searchList, notFound} = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  let filterCount = null;

  if(searchList != null && searchList.length > 0){
    filterCount = searchList;
  }else if(notFound) {
    filterCount = [];
  }else{
    filterCount = products;
  }

  return (
    <div className="filter__items">
      <div className="filter__title" data-testid="filterItemTitle">{title}</div>
      <ul data-testid="filterItems">
        {items?.map((item) => (
          <li data-testid="filterItemsList" key={item.id} className={`${filters[type] === item.id ? 'active' : ''}`} onClick={() => dispatch(addFilter({type: type, value: item.id}))} >
            {item.name}
            {title !== "Sıralama" &&
              `(${filterCount.reduce((acc, curr) => {
                if (curr.brand === item.name) acc++;
                else if (curr.color === item.name) acc++;
                return acc;
              }, 0)})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterItem;
