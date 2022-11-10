const initialState = {
  itemsToPurchase: [],
  totalItems: 0,
}

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case 'add-to-cart':
      let newItemsToPurchase;
      let cartContainsItem = false;
      state.itemsToPurchase.forEach(item => { if (item.name === payload.name) { cartContainsItem = true } })
      newItemsToPurchase = cartContainsItem ?
        state.itemsToPurchase.map(item => {          
          return item.name === payload.name ? { ...item, qty: item.qty += 1 } : item
        }) :
        [...state.itemsToPurchase, {name:  payload.name, price: payload.price, qty: 1 }]
      let cart = {
        itemsToPurchase: newItemsToPurchase,
        totalItems: state.totalItems + 1,
      }
      return cart;

      case 'remove-from-cart':
        let itemsInCart;
        let cartHasItem = false;
        state.itemsToPurchase.forEach(item => { if (item.name === payload.name){
          cartHasItem = true } })
        itemsInCart = cartHasItem ?
          state.itemsToPurchase.map(item => {
            console.log('item ----->', item);
            return item.name === payload.name ? {...item, qty: item.qty -= 1 } : item
          }) :
          [...state.itemsToPurchase.filter(product => product !== payload)]
          return {
            itemsToPurchase: itemsInCart,
            totalItems: state.totalItems - 1,
          }

    case 'reset':
      return initialState;

    default:
      return initialState;

  }
}

export const addItemToCart = (product) => {
  return {
    type: 'add-to-cart',
    payload: product,
  }
}

export const removeItemFromCart = (product) => {
  return {
    type: 'remove-from-cart',
    payload: product,
  }
}

export default cartReducer;