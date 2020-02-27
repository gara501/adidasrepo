import React from 'react';

export const initialState = {
  productUrl: process.env.REACT_APP_BACKEND_URL + 'product',
  productAv: process.env.REACT_APP_BACKEND_URL + 'availability',
  product: {},
  availability: {},
  elements: 10,
  size: 'Select size',
  quantity: 1,
  currentImage: ''
};


export const reducer = (state, action) => {
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

export const Context = React.createContext();