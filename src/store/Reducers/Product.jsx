let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS', desciption: 'Cool tech for sale' },
    { name: 'food', displayName: 'FOOD', desciption: 'Yummy food for sale' },
  ],

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
      return {
        ...state,
        // categories: state.categories.filter(product=> product.category === payload),
        // products: state.products.filter(product=> product.category === payload),
        activeCategory: payload,
      }
    
    case 'reset':
      return initialState;

    default:
      return initialState;
      
  }
}

export const filterCategory = (activeCategory) => {
  return {
    type: 'category',
    payload: activeCategory,
  }
}

export default productReducer;
