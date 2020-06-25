import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'
import Header from './header'
import Catalog from './catalog'
import Basket from './basket'
import { getProducts } from '../redux/reducers/products'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatchEvent(getProducts())
  }, [])


  return (
    <div>
      <Header />
      <Catalog />
      <Route exact path="/basket" component={() => <Basket />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
