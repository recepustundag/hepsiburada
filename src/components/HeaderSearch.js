import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../actions/product";

/* images */
import search from "../assets/images/search.png";
import SearchInput from "./SearchInput";

const HeaderSearch = () => {

  const dispatch = useDispatch();
  const searchKey = useSelector(state => state?.product.searchKey)
  const [mobileSearchDisplay, setMobileSearchDisplay] = useState(false)

  const handleSearch = (e) => {
    if(e.target.value.length > 1){
      dispatch(searchProduct(e.target.value))
    }
    if(e.target.value === ''){
      dispatch(searchProduct(''))
    }
  }

  const handleMobileSearch = (e) => {
    if(mobileSearchDisplay) setMobileSearchDisplay(false)
    else setMobileSearchDisplay(true)
  }
  return (
    <form className="header__search">
      <div className="desktop">
        <img data-testid="searchInputIcon" src={search} alt="search" width="17" height="17" />
        <SearchInput handleSearch={handleSearch} searchKey={searchKey} />
      </div>
      <div className="mobile">
        <button onClick={(e) => handleMobileSearch(e) }>
          <img data-testid="openSearchInput" src={search} alt="search" width="24" height="24" />
        </button>
        <SearchInput handleSearch={handleSearch} mobileDisplay={mobileSearchDisplay} searchKey={searchKey} />
      </div>
    </form>
  );
};

export default HeaderSearch;
