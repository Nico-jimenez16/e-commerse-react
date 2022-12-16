import React from 'react';
import { Outlet } from 'react-router-dom';

// ! import componentes 
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';
import ConfirmationComponent from './components/pure/notifications/confirmation';

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

      <ProductsContextProvider>
        <CardContextProvider>
          <UserContextProvider>
          <Header/>
          <main className='mt-16'>
            <NotificationContextProvider>
              <Outlet/>
              <ConfirmationComponent/>
            </NotificationContextProvider>
          </main>
          <Footer/>
          </UserContextProvider>
        </CardContextProvider>
      </ProductsContextProvider>

    </>
  );
}

export default App;
