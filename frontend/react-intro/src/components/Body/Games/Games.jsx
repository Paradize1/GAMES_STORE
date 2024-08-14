import React, { useState, useEffect } from 'react';
import fetchGames from './Api';
import './Games.css';
import { useCart } from '../Games/CartContext';

function Games() {
    const { addToCart, removeFromCart, cartItems } = useCart();
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    useEffect(() => {
        const loadGames = async () => {
            const gamesData = await fetchGames();
            setGames(gamesData);
        };

        loadGames();
    }, []);

    useEffect(() => {
        if (selectedGame) {
            const isInCart = cartItems.some(item => item.id === selectedGame.id);
            setIsAddedToCart(isInCart);
        }
    }, [selectedGame, cartItems]);

    const handleGameClick = (game) => {
        setSelectedGame(game);
    };

    const handleCloseModal = (event) => {
        if (event.target.className === 'modal') {
            setSelectedGame(null);
            setIsAddedToCart(false);
        }
    };

    const handleAddToCartClick = () => {
        if (isAddedToCart) {
            removeFromCart(selectedGame.id);
        } else {
            addToCart(selectedGame);
        }
        setIsAddedToCart(!isAddedToCart);
    };

    return (
        <div className="games">
            <div className='Game_container'>
                {games.length > 0 ? (
                    games.map(game => (
                        <div key={game.id} className="game-item" onClick={() => handleGameClick(game)}>
                            <img src={game.image} alt={game.title} className="game-image" />
                            <h2 className="game-title">{game.title}</h2>
                            <p className="game-publisher"><strong>Издатель:</strong> {game.publisher}</p>
                            <p className="game-price"><strong>Цена:</strong> {game.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No games found</p>
                )}
            </div>
            {selectedGame && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content">
                        <span className="close" onClick={() => {
                            setSelectedGame(null);
                            setIsAddedToCart(false);
                        }}>&times;</span>
                        <img src={selectedGame.image} alt={selectedGame.title} className="modal-image" />
                        <h2 className="modal-title">{selectedGame.title}</h2>
                        <p className="modal-description">{selectedGame.description}</p>
                        <p className="modal-publisher"><strong>Издатель:</strong> {selectedGame.publisher}</p>
                        <p className="modal-price"><strong>Цена:</strong> {selectedGame.price}</p>
                        <button className="add-to-cart-button" onClick={handleAddToCartClick}>
                            {isAddedToCart ? 'Удалить' : 'Добавить в корзину'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Games;



