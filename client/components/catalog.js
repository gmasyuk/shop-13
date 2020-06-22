import React from 'react'

const Catalog = () => {


    return (
      <div>
          Catalog
          <div className="flex flex-wrap border-2 w-32 h-32">
              <div>Название товара</div>
              <img alt="zhopa"/>
              <div className="flex justify-between">
              <button type="button">-</button>
              количество 
              <button type="button">+</button>
              </div>
              <div>Price(валюта)</div>
              <button type="button">Добавить</button>
          </div>
           <div className="flex flex-wrap border-2 w-32 h-32">
              <div>Название товара</div>
              <div>Фото товара</div>
              <div className="flex justify-between">
              <button type="button">-</button>
              количество 
              <button type="button">+</button>
              </div>
              <div>Price(валюта)</div>
              <button type="button">Добавить</button>
          </div>
      </div>
    )
  }
  
  Catalog.propTypes = {}
  
  export default Catalog
  