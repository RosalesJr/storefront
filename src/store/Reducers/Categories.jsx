import axios from 'axios';

let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS', desciption: 'Cool tech for sale' },
    { name: 'food', displayName: 'FOOD', desciption: 'Yummy food for sale' },
  ],
};

function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'category':
      return {
        ...state,
        activeCategory: payload,
      }
    
    case 'get_categories':
      return{
        ...state,
        categories: action.payload
      }

    case 'reset':
      return state;

    default:
      return  state;
      
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch(setCategories(response.data.results));
}

export const setCategories = (data) => {
  return {
    type: 'get_categories',
    payload: data,
  }
}

export const filterCategory = (activeCategory) => {
  return {
    type: 'category',
    payload: activeCategory,
  }
}

export default categoryReducer;