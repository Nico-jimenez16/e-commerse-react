import React from 'react';
import { Outlet } from 'react-router-dom';

// import componentes 
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';

// import styles 
import './App.css';

import { ProductsContextProvider } from './context/ProductsContext';
import { CardContextProvider } from './context/CardContext';


const App = () => {

  return (
    <>

      <ProductsContextProvider>
        <CardContextProvider>
          <Header/>
          <main className='mt-16'>
              <Outlet/>
          </main>
          <Footer/>
        </CardContextProvider>
      </ProductsContextProvider>

    </>
  );
}

export default App;
