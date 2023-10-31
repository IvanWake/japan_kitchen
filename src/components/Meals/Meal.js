import React, { useContext } from "react";
import MealForm from "./MealForm";
import CartContext from "../../store/cart-context";

const Meal = (props) => {
    const cartContext = useContext(CartContext)
    let formattedPrice = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    }

    return (
        <div
            className="block rounded-lg bg-white p-6
            shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
            dark:bg-neutral-700"
            key={props.key}>
            <h5 className="mb-2 text-xl font-medium
            leading-tight text-neutral-800
            dark:text-neutral-50">
                {props.name}
            </h5>
            <p className="mb-4 text-base
            text-neutral-600
            dark:text-neutral-200">
                {props.desc}
            </p>
            <span className="text-purple-700 font-bold text-xl">{formattedPrice}</span>
            <MealForm onAddToCart={addToCartHandler} id={props.id} />
        </div>
    );
}
export default Meal;