import React , { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ! importacion de las rutas 
import RoutesComponent from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <RoutesComponent/>
    </StrictMode>
);

