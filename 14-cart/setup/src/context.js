import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const defaultCartState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0
}


 
const AppProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(reducer, defaultCartState);

        const clearItems = () => {
          dispatchCartAction({ type: "Clear_Item"});
        };

        const removeItem = (id)=>{
          dispatchCartAction({type: 'REMOVE',  payload: id})
        }

        const increaseItem = (id)=>{
              dispatchCartAction({ type: "INCREASE", payload: id });
        }

        const decreaseItem = (id) => {
            dispatchCartAction({ type: "DECREASE", payload: id });
        };

        useEffect(() => {
          dispatchCartAction({ type: "GET_TOTALS" });
        }, [cartState.cart]);

        const fetchData = async()=>{
          dispatchCartAction({type: 'LOADING'});
          const response = await fetch(url);
          const cart = await response.json();
          console.log(cart)
          dispatchCartAction({type: 'DISPLAY_ITEM', payload: cart})
        }

        useEffect(() => {
          fetchData()
        }, [])
        


  return (
    <AppContext.Provider
      value={{
        ...cartState,
        clearItems,
        removeItem,
        increaseItem,
        decreaseItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
