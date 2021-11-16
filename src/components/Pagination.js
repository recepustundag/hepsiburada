import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPaginate } from '../actions/product';
import { perPage } from '../utils/helper';

const Pagination = ({data}) => {
  
  const dispatch = useDispatch();
  const {currentPage} = useSelector(state => state.product)
  const pageNumber = Math.round(data?.length / perPage);
  const handleChangePage = (page) => {
    if(page <= 0 || page > pageNumber) return
    dispatch(setPaginate(page))
  }
  
  return (
    <div className="pagination">
      <div onClick={() => handleChangePage(currentPage - 1)} className="link prev" data-testid="paginationPrevLink"> {`<`} </div>
      {
        pageNumber &&
        [...Array(pageNumber)].map((x, i) => {
          return <div data-testid="paginationPageLink" key={i} onClick={() => handleChangePage(i + 1)} className={`link${currentPage === i + 1 ? ' active' : ''}`}>{i + 1}</div>
        })
      }
      <div onClick={() => handleChangePage(currentPage + 1)} className="link next" data-testid="paginationNextLink"> {`>`} </div>
    </div>
  )
}

export default Pagination
