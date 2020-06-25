import { useDispatch } from 'react-redux'

const GET_PRODUCTS = 'GET_PRODUCTS'

const initialState = {
  list: []
}


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, list: action.list }
    default:
      return state
  }
}

export function getProducts() {
    return (dispatch) => { 
        fetch('/api/v1/products')
        .then(res => res.json())
        .then(list => {
            dispatch({type:GET_PRODUCTS, list})
        })
    }
}