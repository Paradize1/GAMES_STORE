import React, { useState } from 'react';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (game) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === game.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === game.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...game, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (gameId) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === gameId);
            if (existingItem.quantity === 1) {
                return prevItems.filter(item => item.id !== gameId);
            } else {
                return prevItems.map(item =>
                    item.id === gameId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
        });
    };

    return { cartItems, addToCart, removeFromCart };
}

export default Cart;