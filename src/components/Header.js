import React from 'react'

/* components */
import Basket from './Basket'
import HeaderSearch from './HeaderSearch'

/* image */
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" data-testid="logo" />
      </div>
      <HeaderSearch />
      <Basket />
    </header>
  )
}

export default Header
