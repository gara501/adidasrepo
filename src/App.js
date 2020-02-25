import React, { useReducer } from 'react';
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
  product: {
    image: {
      src: 'https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/b0be3a0d8ad54df59ad2ab2200f61552_9366/NMD_R1_Shoes_White_FU9350_01_standard.jpg',
      alt: 'nada'
    },
    name: 'NMD_R1 SHOES',
    value: '$130',
    color: 'Cloud White / Cloud White / Crystal White',
    size: '6.5 (US - Women)',
    quantity: 2
  }
};
const reducer = (state, action) => {
  console.log(action);
  console.log(state)
  switch(action.type) {
    case 'SELECT_ITEM':
      return {...state, product: action.payload};
    case 'OPEN_MODAL':
      return {...state, modal: action.payload };
    default:
      return {...state};
  }
}

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({type: 'OPEN_MODAL', payload: 'open'})
  }

  const closeModal = () => {
    dispatch({type: 'OPEN_MODAL', payload: ''})
  }

  return (
    <Router>
      <Nav />
      <UspHeader />
      <Modal closeModal={closeModal} showModal={state.modal} product={state.product} />
      <Switch>
        <Route exact path="/" component={() => <Product dispatch={dispatch} />}></Route>
        <Route path="/checkout" component={Bag} ></Route>
      </Switch>
    </Router>
  );
}

export default App;
