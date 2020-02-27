import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Context, initialState, reducer } from './store';
import Modal from './components/modal';
import Bag from './pages/bag';
import Product from './pages/product';
import Nav from './components/nav';
import UspHeader from './components/uspheader';


function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    fetchProduct();
    fetchAvailability();
    loadCurrentImage();
  }, []);

  
  // Get data from API
  async function fetchProduct() {
    const res = await fetch(state.productUrl);
    const data = await res.json();
    dispatch({type: 'GET_PRODUCT', payload: data })
    loadCurrentImage(data.product_description.description_assets.image_url);
  }

  async function fetchAvailability() {
    const res = await fetch(state.productAv);
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
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Nav />
        <UspHeader />
        { Object.keys(state.product).length <= 0 ? <h2>Loading...</h2>: <Modal closeModal={closeModal} showModal={state.modal} state={state} dispatch={dispatch} /> }
        <Switch>
          <Route exact path="/" component={() => <Product product={state.product} currentImage={state.currentImage} dispatch={dispatch} state={state} />}></Route>
          <Route path="/checkout" component={Bag} ></Route>
        </Switch>
      </Router>
    </Context.Provider>
      );
}

export default App;
