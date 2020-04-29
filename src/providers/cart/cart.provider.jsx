import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemFromCart, filterItemFromCart, ItemCountNumber, totalPriceOfCart } from './cart.utils'

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0,
    totalPrice: 0
})


const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)



    const toggleHidden = () => setHidden(!hidden)
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item))
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart = (item) => setCartItems(filterItemFromCart(cartItems, item))

    useEffect(() => {
        const persist = localStorage.getItem('cart-items');
        
        if (persist) {
            setCartItems(JSON.parse(persist))
        }
    }, [])

    useEffect(() => {
        setCartItemsCount(ItemCountNumber(cartItems))
        setTotalPrice(totalPriceOfCart(cartItems))

        localStorage.setItem('cart-items', JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            addItem,
            removeItem,
            clearItemFromCart,
            cartItems,
            cartItemsCount,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider;