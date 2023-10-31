import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return (
        <div className="fixed t-0 l-0 w-full h-screen z-20 bg-black opacity-60" onClick={props.onSetVisibilityCart}></div>
    );
}
const ModalWindow = (props) => {
    return (
        <div className="absolute w-[90%] top-[20vh] left-[5%] bg-white p-4 rounded-2xl z-30 overflow-y-auto">
            <div>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(<Backdrop onSetVisibilityCart={props.onSetVisibilityCart}/>,
                    document.getElementById('overlays'))}

            {
                ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>,
                    document.getElementById('overlays'))}
        </React.Fragment>
    );
}

export default Modal;