import React from 'react';
import { useCart } from '../Body/Games/CartContext';
import './Header.css';



function CartModal({ onClose }) {
    const { cartItems } = useCart();

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0).toFixed(2);
    };

    const handlePayment = () => {
        alert('Вы оплатили товар');
    };

    return (
        <div className="cart-modal" onClick={onClose}>
            <div className="cart-modal-content" onClick={e => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Корзина</h2>
                {cartItems.length > 0 ? (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                {item.title} - {item.quantity} x ${parseFloat(item.price).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Корзина пуста</p>
                )}
                <h3>К оплате: ${getTotalPrice()}</h3>
                <button className="pay-button" onClick={handlePayment}>Оплатить</button>
            </div>
        </div>
    );
}

export default CartModal;
