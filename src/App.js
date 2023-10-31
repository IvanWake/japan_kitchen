import React, { useState } from 'react';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

const App = () => {
      const [cartIsVisible, setCartIsVisible] = useState(false);

      const setVisibilityCartHandler = () => {
          setCartIsVisible(!cartIsVisible);
      }

      return (
          <CartContextProvider>
              {
                  cartIsVisible && <Cart onSetVisibilityCart={setVisibilityCartHandler}/>
              }
            <Header onSetVisibilityCart={setVisibilityCartHandler} />
            <div className="container mx-auto">
              <Meals />
            </div>
          </CartContextProvider>
      );
}

export default App;
