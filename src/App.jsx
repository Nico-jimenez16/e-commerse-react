import React from 'react';
import { Outlet } from 'react-router-dom';

// ! import componentes 
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';
import ConfirmationComponent from './components/pure/notifications/Confirmation';

// ! import styles 
import './App.css';

// ! importando los contextos 
import { ProductsContextProvider } from './context/ProductsContext';
import { CardContextProvider } from './context/CardContext';
import { UserContextProvider } from './context/UserContext';
import { NotificationContextProvider } from './context/NotificationContext';


const App = () => {

  return (
    <>
      {/* Contextos para variables globales  */}
      <ProductsContextProvider>
        <CardContextProvider>
          <UserContextProvider>
            {/* header de la aplicacion  */}
          <Header/>
          <main className='mt-16'>
            <NotificationContextProvider>
              <Outlet/>
              <ConfirmationComponent/>
            </NotificationContextProvider>
          </main>
          {/* footer de la aplicacion  */}
          <Footer/>
          </UserContextProvider>
        </CardContextProvider>
      </ProductsContextProvider>

    </>
  );
}

export default App;
