import React, { Fragment } from "react";

const Input = (props) => {
    return (
        <Fragment>
            <label htmlFor={props.id} className="w-1 font-bold">{props.label}</label>
            <input className="pl-4 w-16 border-2 rounded-input-number" id={props.id} type={props.type} placeholder={props.placeholder} />
        </Fragment>
    );
}

export default Input;