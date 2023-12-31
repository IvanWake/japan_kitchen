import React, { useReducer } from "react";
import CartContext from "./cart-context";

    const defaultCartState = {
        items: [],
        totalAmount: 0
    }

    const cartReducer = (state, action) => {
        if (action.type === 'addItem') {
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

            const existingCartItemIndex = state.items.findIndex(item => {
                return item.id === action.item.id;
            });

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItem;
            let updatedItems;

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount,
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItem = {
                    ...action.item
                }
                updatedItems = state.items.concat(updatedItem);
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
    if (action.type === 'removeItem') {

        const existingCartItemsIndex = state.items.findIndex((item) => {
            return item.id === action.id;
        })
        const existingCartItem = state.items[existingCartItemsIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemsIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'removeItems') {
        return defaultCartState;
    }
        return defaultCartState;
    };

const CartContextProvider = (props) => {

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartState({
            type: 'addItem',
            item: item,
        });
    };

    const removeItemHandler = (id) => {
        dispatchCartState({
            type: 'removeItem',
            id: id,
        });
    };
    const removeItemsHandler = () => {
        dispatchCartState({
            type: 'removeItems',
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        removeItems: removeItemsHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
}

export default CartContextProvider;