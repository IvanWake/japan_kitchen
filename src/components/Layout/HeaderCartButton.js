import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {

    const [isCartButtonScale, setIsCartButtonScale] = useState(false);

    const cartContext = useContext(CartContext);

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => currentValue + item.amount, 0);


    return (
        <motion.button className="text-white bg-purple-900 rounded-full py-2 px-12 flex justify-around items-center" 
        type="button" 
        onClick={props.onSetVisibilityCart}
        initial={{ scale: 0.7 }}
        whileHover={{ 
            scale: 1,
            transition: {
                duration: 0.3,
                type: 'tween'
            }
        }}
        >
            <span className="w-5 h-6 mr-4 mt-1">
                <CartIcon />
            </span>
            <span>Корзина</span>
            <span className="bg-purple-700 py-1 px-4 rounded-full ml-6">{cartItemsNumber}</span>
        </motion.button>
    );
}

export default HeaderCartButton;