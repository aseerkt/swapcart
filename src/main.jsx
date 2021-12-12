import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './context/cart/CartContext';
import AlerProvider from './context/alert/AlertContext';

ReactDOM.render(
  <React.StrictMode>
    <AlerProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AlerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
