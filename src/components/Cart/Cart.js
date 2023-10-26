import React from 'react';
import Modal from "../UI/Modal";

const Cart = (props) => {

    const cartItems = (
        <ul className="list-none m-0 p-0 max-h-80 overflow-auto">
            {[{id: 'm1', name: 'Sushi', amount: 2, price: 10.99}].map((item) => (
                <li className="font-bold">{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal>
            {cartItems}
            <div className="flex justify-between items-center font-bold text-2xl my-4 mx-0">
                <span>Итого</span>
                <span>49.99</span>
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