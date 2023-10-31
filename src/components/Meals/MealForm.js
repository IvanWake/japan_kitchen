import React, { useRef, useState } from "react";

import Input from "../UI/Input";

const MealForm = (props) => {
    const [isAmountValid, setIsAmountValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const inputAmount = amountInputRef.current.value;
        if (inputAmount.trim().length === 0 || +inputAmount < 0 || +inputAmount > 10) {
            setIsAmountValid(false);
            return;
        }

        props.onAddToCart(+inputAmount);
    };

    return (
        <form className="text-right" onSubmit={submitHandler}>
            <div className="container mb-4 space-x-2 px-5 ">
                <Input id="amount" ref={amountInputRef} label="Количество" placeholder="1" type="number"/>
            </div>
            <div className="container px-5">
                <button className="text-white py-1 px-8 bg-promo-color rounded-button-submit" type="submit">Добавить</button>
                {!isAmountValid && <p>Кол-во от 1 до 10</p>}
            </div>
        </form>
    );
}

export default MealForm;