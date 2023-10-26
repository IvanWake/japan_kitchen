import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
    return (
        <button className="text-white bg-purple-900 rounded-full py-2 px-12 flex justify-around items-center" type="button" onClick={props.onSetVisibilityCart}>
            <span className="w-5 h-6 mr-4 mt-1">
                <CartIcon />
            </span>
            <span>Корзина</span>
            <span className="bg-purple-700 py-1 px-4 rounded-full ml-6">0</span>
        </button>
    );
}

export default HeaderCartButton;