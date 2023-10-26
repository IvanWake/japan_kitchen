import React from "react";
import ReactDOM from "react-dom";

export const Backdrop = (props) => {
    return (
        <div className="fixed t-0 l-0 w-full h-screen z-20 bg-black opacity-60"></div>
    );
}
export const ModalWindow = (props) => {
    return (
        <div className="fixed w-[90%] top-[20vh] left-[5%] bg-white p-4 rounded-2xl z-30">
            <div>{props.children}</div>
        </div>
    );
}


const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, document.getElementById('overlays'))}
        </React.Fragment>
    );
}

export default Modal;