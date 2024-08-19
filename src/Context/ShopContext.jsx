/* eslint-disable react/prop-types */
import React, { createContext } from "react";
import all_product from './../assets/all_product';
import { useState } from "react";


export const ShopContext = createContext(null)

const getDefaultCartDeta = () => {
    let cart = {};

    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCartDeta())
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        console.log(itemId);
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {

                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }

    const getTotalCartAmmount = () => {
        let totalAmmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmmount
    }

    const contextValue = { getTotalCartAmmount, getTotalItem, all_product, cartItems, addToCart, removeFromCart }
    // console.log(cartItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider