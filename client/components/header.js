import React from 'react'
import { Link } from 'react-router-dom'
// import wave from '../assets/images/wave.jpg'

const Header = () => {


  return (
    <div className="flex justify-around border-2 bg-red-600">
        <div id="brand-name">
            <Link to="/"> Main </Link> 
            </div>
        <div id="order-count">
            <Link to="/basket">Basket</Link>
        </div>
        <div>
            <button type="button">USD</button>
            <button type="button">EUR</button>
            <button type="button">CAD</button>
        </div>
        <div>Sort by
            <button type="button" id="sort-price">price</button>
            <button type="button" id="sort-name">name</button>
        </div>
        <div>
            Summ of products
        </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
