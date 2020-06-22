import React from 'react'
import { Route} from 'react-router-dom'
import Header from './header'
import Catalog from './catalog'
import Basket from './basket'

// import wave from '../assets/images/wave.jpg'

const Home = () => {


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
