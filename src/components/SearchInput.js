import React from 'react'

const SearchInput = ({handleSearch, searchKey, mobileDisplay}) => {
  return (
    <input onChange={(e) => handleSearch(e)} className={`${mobileDisplay ? 'active' : ''}`} type="text" defaultValue={searchKey} placeholder="25 milyon'dan fazla ürün içerinde ara" data-testid="searchInput" />
  )
}

export default SearchInput
