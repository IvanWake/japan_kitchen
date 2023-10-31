import React, { useContext } from 'react';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;


    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    };

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    };

    const cartItems = cartContext.items.map((item) => (
            <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={addCartItemHandler.bind(null, item)}
                onRemove={removeCartItemHandler.bind(null, item.id)}
            />
        )
    );

    return (
        <Modal onSetVisibilityCart={props.onSetVisibilityCart}>
            <div className="space-y-5">
                {cartItems}
            </div>
            <div className="flex justify-between items-center font-bold text-2xl my-4 mx-0">
                <span>Итого</span>
                <span>{totalAmount}</span>
            </div>
            <div className="text-right">
                <button className="bg-transparent border-promo-color border rounded-3xl px-8 py-2 hover:bg-purple-950 hover:text-white"
                        type="button" onClick={props.onSetVisibilityCart}>Закрыть</button>
                <button className="bg-transparent border-promo-color border rounded-3xl px-8 py-2 hover:bg-purple-950 hover:text-white"
                        type="button" onClick={props.onSetVisibilityCart}>Заказать</button>
            </div>
        </Modal>
    );
}

export default Cart;