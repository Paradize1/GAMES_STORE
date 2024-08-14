import React, { useState } from 'react';
import { useCart } from '../Body/Games/CartContext';
import CartModal from './CartModal';
import './Header.css';




function Header() {
    const { cartItemCount } = useCart();
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    const toggleCartModal = () => {
        setIsCartModalOpen(prevState => !prevState);
    };

    return (
        <div className="Header">
            <div className="store_name">GAMES_STORE</div>
            <div className="cart" onClick={toggleCartModal}>
                {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
            </div>
            {isCartModalOpen && <CartModal onClose={toggleCartModal} />}
        </div>
    );
}

export default Header;