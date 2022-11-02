import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

// importamos las paginas 
import App from '../App';
import HomePage from '../pages/Home/HomePage';
import ProductsPage from '../pages/Products/ProductsPage';
import DetailsProductPage from '../pages/Products/DetailsProductPage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import CartPage from '../pages/Cart/CartPage';
import NotFoundPage from '../pages/404/NotFoundPage';


const RoutesComponent = () => {
  return (
    <>
          <Router>
              <Routes>
                  <Route path='/' element={ <App /> }>
                      <Route index path='/' element={ <HomePage/> } />
                      <Route path='products' element={ <ProductsPage/> } />
                      <Route path='products/:productId' element={ <DetailsProductPage/>} />
                      <Route path='login' element={ <LoginPage/> } />
                      <Route path='register' element={ <RegisterPage/> } />
                      <Route path='cart' element={ <CartPage/> } />
                      <Route path="*" element={ <NotFoundPage/> } />
                  </Route>
              </Routes>
          </Router>
    </>
  )
}

export default RoutesComponent;
