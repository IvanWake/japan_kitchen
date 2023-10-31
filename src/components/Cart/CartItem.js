import React from "react";

const CartItem = (props) => {
    return (
        <div
            className="block rounded-lg bg-white p-6
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
            dark:bg-neutral-700"
            key={props.key} id={props.id}>
            <h5 className="mb-2 text-xl font-medium
            leading-tight text-neutral-800
            dark:text-neutral-50">
                {props.name}
            </h5>
            <span className="text-purple-700 font-bold text-xl">{props.price}</span>
            <div className="flex  justify-items-end">
                <button className="bg-transparent border-promo-color border rounded-2xl px-4 py-1 hover:bg-purple-950 hover:text-white"
                        type="button" onClick={props.onRemove}>-</button>
                <button className="bg-transparent border-promo-color border rounded-2xl px-4 py-1 hover:bg-purple-950 hover:text-white"
                        type="button" onClick={props.onAdd}>+</button>
            </div>
            <div className="flex flex-col">
                <span className="text-purple-700 font-bold text-xl">x {props.amount}</span>
            </div>
        </div>
    );
}

export default CartItem;