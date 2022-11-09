let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS', desciption: 'Cool tech for sale' },
    { name: 'food', displayName: 'FOOD', desciption: 'Yummy food for sale' },
  ],
  activeCategory: '',
};

function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'category':
      return {
        ...state,
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

export default categoryReducer;