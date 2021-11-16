import React, { useState } from 'react'
import BadgeButton from './BadgeButton'
import Card from './Card'

/* icons */
import shopIcon from "../assets/images/shop.svg";
import { useSelector } from 'react-redux';

const Basket = () => {
  const cart = useSelector(state => state?.cart.cart);
  const [basketClass, setBasketClass] = useState('');

  const addClass = (e) => {
    if(e.target.classList.contains('active')) setBasketClass('')
    else setBasketClass('active')
  }

  return (
    <div className="header__basket">
      <div className="desktop">
        <BadgeButton addClass={addClass} isActive={basketClass === 'active' ? true : false} title="Sepetim" count={cart?.length} />
      </div>
      <div className="mobile">
        <button>
          <img onClick={(e) => {addClass(e); e.target.classList.toggle('active')}} src={shopIcon} alt="basket" width="24" height="24" />
        </button>
      </div>
      <Card cartItems={cart} isActive={basketClass === 'active' ? true : false} />
    </div>
  )
}

export default Basket
