import axios from 'axios';

let initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inventory: 5, image: `${process.env.PUBLIC_URL}/images/diego-gonzalez--I8lDurtfAo-unsplash.jpg`},
    { name: 'Radio', category: 'electronics', price: 99.00, inventory: 15, image:`${process.env.PUBLIC_URL}/images/mehmet-turgut-kirkgoz-CLxxr51_qGE-unsplash.jpg` },
    { name: 'Apples', category: 'food', price: .99, inventory: 500, image: `${process.env.PUBLIC_URL}/images/pierpaolo-riondato-s7r4xjKXo0s-unsplash.jpg` },
    { name: 'Eggs', category: 'food', price: 1.99, inventory: 12, image: `${process.env.PUBLIC_URL}/images/jiangxulei1990-eIzzzwtkBjU-unsplash.jpg` },
    { name: 'Bread', category: 'food', price: 2.39, inventory: 90, image: `${process.env.PUBLIC_URL}/images/angelo-pantazis-2-U0A2tNYhM-unsplash.jpg` },
  ],
  activeCategory: '',
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'category':
      return  {
        ...state,
        products: state.products.filter(product => product.category === payload),
        activeCategory: payload,
      }
    
    case 'get_products':
      return{
        ...state,
        products: action.payload,
      }

    // case 'add-to-cart':
    //   let products = [...state.products];
    //   let newProducts = products.map(product => product.name === payload.name ? {...product, inventory: product.inventory -= 1} : product)
    //   return {...state, products: newProducts};

      case 'add-to-cart':
        let products = [...state.products];
        let newProducts = products.map(product => product._id === payload._id ? {...product, inStock: product.inStock -= 1} : product)
        return {...state, products: newProducts};
    
    case 'remove-from-cart':
      let productInventory = [...state.products];
      let newInventory = productInventory.map(product => product.name === payload.name ? {...product, inventory: product.inventory += 1} : product)
      console.log('inventory ------>', newInventory);
      return {...state, products: newInventory};
    
    case 'reset':
      return state;

    default:
      return state;
      
  }
}

export const getProducts = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  dispatch(setProducts(response.data.results));
}

export const setProducts = data => {
  return {
    type: 'get_products',
    payload: data,
  }
}

export const updateInventory = () => async (dispatch, getState) => {
    let id = getState.list._id;
    console.log('ID ------->', id);
    let url =  `https://api-js401.herokuapp.com/api/v1/products/${id}`
    let update = await axios.put(url, id)
    dispatch(putProducts(update));
}

export const putProducts = id => {
  return{
    type: 'add-to-cart',
    payload: id,
  } 
}

export const filterCategory = (activeCategory) => {
  return {
    type: 'category',
    payload: activeCategory,
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

export default productReducer;
