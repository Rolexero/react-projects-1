const reducer = (state, action)=>{
    if (action.type === 'Clear_Item') {
        return {...state, cart: []};
    }
    if (action.type === 'REMOVE') {
        let tempCart = state.cart.filter((item)=>item.id !== action.payload)
        return {...state, cart: tempCart}
    }
    if (action.type === 'INCREASE') {
        let newTotalAmount;
        let tempCart = state.cart.map((item)=>{
            if (item.id === action.payload) {
                return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {...state, cart: tempCart}
    }

    if (action.type === 'DECREASE') {
                let tempCart = state.cart.map((item) => {
                  if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 };
                  }
                  return item;
                }).filter((item)=> item.amount !== 0);
                return { ...state, cart: tempCart};
    }

    if (action.type === "GET_TOTALS") {
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amount };
    }

    if (action.type === 'LOADING') {
        return {...state, loading: true}
    }

    if (action.type === "DISPLAY_ITEM") {
        return {...state, cart: action.payload, loading: false}
    }
    return state
}

export default reducer