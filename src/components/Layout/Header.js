import React, { Fragment } from 'react';
import headerImg from '../../assets/img/sushi.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className="flex justify-between py-5 bg-purple-700 shadow-3xl">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <h1 className="text-center text-white text-3xl font-extrabold">Japan Kitchen</h1>
                        <HeaderCartButton onSetVisibilityCart={props.onSetVisibilityCart} />
                    </div>
                </div>
            </header>
            <div className="flex justify-center overflow-hidden w-full h-[25rem] z-0">
                <img className="-rotate-6 -translate-y-8 translate-x-20 object-cover w-[120%] h-full" src={headerImg} alt='суши шапка' />
            </div>
        </Fragment>
    );
}

export default Header;