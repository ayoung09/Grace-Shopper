let initState = {
  currentCart: {},
}

//constants
const LOAD_CART = 'LOAD_CART';
const ADD_ITEM = 'ADD_ITEM';
const INCREMENT_ITEM = 'INCREMENT_ITEM';
const DECREMENT_ITEM = 'DECREMENT_ITEM';
const SET_ITEM_QTY = 'SET_ITEM_QTY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

//reducer
const cartReducer = (prevState = initState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {

    case LOAD_CART:
      nextState.currentCart = action.cart;
      break;

    case ADD_ITEM:
      nextState.currentCart[action.itemId] = 1;
      break;

    case INCREMENT_ITEM:
      nextState.currentCart[action.itemId]++;
      break;

    case DECREMENT_ITEM:
      nextState.currentCart[action.itemId]--;
      break;

    case SET_ITEM_QTY:
    	nextState.currentCart[action.itemId] = action.quantity;
      break;

    case REMOVE_ITEM:
      delete nextState.currentCart[action.itemId];
      break;

    case CLEAR_CART:
      nextState.currentCart = {};
      break;

    default:
    	return prevState;
    }

    return nextState;
 }

//action creators
export const loadCart = (cart) => {
  return {
    type: LOAD_CART,
    cart
  }
};

export const addItem = (itemId) => {
  return {
    type: ADD_ITEM,
    itemId
  }
};

export const incrementItem = (itemId) => {
  return {
    type: INCREMENT_ITEM,
    itemId
  }
}

export const decrementItem = (itemId) => {
  return {
    type: DECREMENT_ITEM,
    itemId
  }
}

export const setItemQty = (itemId, quantity) => {
  return {
    type: SET_ITEM_QTY,
    itemId,
    quantity
  }
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId
  }
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export default cartReducer;
