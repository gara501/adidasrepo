import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Modal from './components/modal';
import Bag from './pages/bag';
import Product from './pages/product';
import Nav from './components/nav';
import UspHeader from './components/uspheader';


const initialState = {
  productUrl: 'https://www.adidas.com/api/products/FU9350',
  productAv: 'https://www.adidas.com/api/products/FU9350/availability',
  product: {},
  availability: {},
  elements: 10,
  size: 'Select size',
  quantity: 1,
  currentImage: ''
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_PRODUCT_URL':
      return {...state, productUrl: action.payload};
    case 'UPDATE_PRODUCTAV_URL':
      return {...state, productAv: action.payload};
    case 'GET_PRODUCT':
      return {...state, product: action.payload};
    case 'SET_ELEMENTS':
        return {...state, elements: action.payload };
    case 'SET_IMAGE':
        return {...state, currentImage: action.payload };
    case 'SET_SIZE':
      return {...state, size: action.payload};
    case 'SET_QUANTITY':
        return {...state, quantity: action.payload};
    case 'GET_AVAILABILITY':
        return {...state, availability: action.payload};
    case 'SELECT_ITEM':
      return {...state, selected: action.payload};
    case 'OPEN_MODAL':
      return {...state, modal: action.payload };
    default:
      return {...state};
  }
}


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    fetchProduct();
    fetchAvailability();
    loadCurrentImage();
  }, []);
  
  // Get data from API
  async function fetchProduct() {
    const res = await fetch(state.productUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "*"
        }
    });
    const data = await res.json();
    dispatch({type: 'GET_PRODUCT', payload: data })
    loadCurrentImage(data.product_description.description_assets.image_url);
  }

  async function fetchAvailability() {
    const res = await fetch(state.productAv, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Headers': "*"
        }
    });
    const data = await res.json();
    dispatch({type: 'GET_AVAILABILITY', payload: data })
  }

  const openModal = () => {
    dispatch({type: 'OPEN_MODAL', payload: 'open'})
  }

  const closeModal = () => {
    dispatch({type: 'OPEN_MODAL', payload: ''})
  }

  const loadCurrentImage = (imageUrl) => {
    dispatch({type: 'SET_IMAGE', payload: imageUrl})
  }

  return (
      <Router>
        <Nav />
        <UspHeader />
        { Object.keys(state.product).length <= 0 ? <h2>Loading...</h2>: <Modal closeModal={closeModal} showModal={state.modal} state={state} dispatch={dispatch} /> }
        <Switch>
          <Route exact path="/" component={() => <Product product={state.product} currentImage={state.currentImage} dispatch={dispatch} state={state} />}></Route>
          <Route path="/checkout" component={Bag} ></Route>
        </Switch>
      </Router>
      );
}

export default App;
