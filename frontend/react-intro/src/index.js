import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { CartProvider } from './components/Body/Games/CartContext';  // Импортируем CartProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
