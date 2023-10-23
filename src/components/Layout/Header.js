import React, { Fragment } from 'react';
import headerImg from '../../assets/img/sushi.jpg';

const Header = (props) => {
    return (
        <Fragment>
            <header className="flex justify-between py-5 bg-purple-600 shadow-3xl">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <h1 className="text-center text-white text-3xl font-extrabold">Japan Kitchen</h1>
                        <button className="text-black bg-white rounded-full p-3" type="button">Корзина</button>
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