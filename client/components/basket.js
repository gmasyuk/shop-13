import React from 'react'
import Header from './header'

const Basket = () => {


    return (
      <div>
          <Header />
            <div className="flex justify-around">
              <button type="button"> Product </button>
              <button type="button"> Price </button>
            </div>
            <div className="flex flex-col">
              <p>ProductName</p>
            <img alt="zhopa"/>
            <div>Price</div>
            <button type="button">+</button>
            <button type="button">-</button>
            </div>
            <div className=" flex justify-center" id="total-amount"><p>Total cost</p></div>
      </div>
    )
  }
  
  Basket.propTypes = {}
  
  export default Basket
  