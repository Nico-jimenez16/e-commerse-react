import React from 'react';
import { Outlet } from 'react-router-dom';

// import componentes 
import Header from './components/pure/Header';
import Footer from './components/pure/Footer';

// import styles 
import './App.css';

const App = () => {
  return (
    <>
    
        <Header/>
        <main className='mt-16'>
          {/* { mobileNavigationModel &&
            <ModelMobileNavigation/>
          } */}
          <Outlet/>
        </main>
        <Footer/>

    </>
  );
}

export default App;
