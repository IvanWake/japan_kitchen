import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";

import Input from "../UI/Input";

const MealForm = (props) => {

    const createPortalHandler = () => {
        ReactDOM.createPortal(<Cart />, document.getElementById('cartModal'));
    }


    return (
        <form className="text-right">
            <div className="container mb-4 space-x-2 px-5 ">
                <Input id="amount" label="Количество" placeholder="1" type="number"/>
            </div>
            <div className="container px-5">
            <button className="text-white py-1 px-8 bg-promo-color rounded-button-submit"  type="button">Добавить</button>
            </div>
        </form>
    );
}

export default MealForm;