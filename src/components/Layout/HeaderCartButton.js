import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => currentValue + item.amount, 0);


    return (
        <button className="text-white bg-purple-900 rounded-full py-2 px-12 flex justify-around items-center" type="button" onClick={props.onSetVisibilityCart}>
            <span className="w-5 h-6 mr-4 mt-1">
                <CartIcon />
            </span>
            <span>Корзина</span>
            <span className="bg-purple-700 py-1 px-4 rounded-full ml-6">{cartItemsNumber}</span>
        </button>
    );
}

export default HeaderCartButton;