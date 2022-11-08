import React from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Categories from './Components/Categories/Categories';
import CategoriesList from './Components/Categories/CategoriesList';


function App() {
  return (
    <>
      <Header />
      <Categories />
      <CategoriesList />
      <Footer />
    </>
  );
}

export default App;
