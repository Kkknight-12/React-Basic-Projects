const reducer = (state, action) => {
    if(action.type ==='CLEAR_CART'){
        return { ...state, cart: [] }
    }

    if( action.type === 'REMOVE' ){
        return {
            ...state, 
            cart: state.cart.filter( (cartItem) => cartItem.id !== action.payload)
        }
    }

    if( action.type === 'INCREASE' ){
        console.log(state.cart)
        let tempCart = state.cart.map( (cartItem) => {
            if( cartItem.id === action.payload ){
                return {
                    ...cartItem, 
                    amount: cartItem.amount + 1
                }
            }
            return cartItem; // must return this or else id of undefined error will occure
        })
        return {
            ...state, 
            cart: tempCart
        }
    }
    if( action.type === 'DECREASE' ){
        let tempCart = state.cart.map( (cartItem) => {
            if( cartItem.id === action.payload ){
                return {
                    ...cartItem, 
                    amount: cartItem.amount - 1
                }
            }
            return cartItem;
        }).filter( (cartItem) => cartItem.amount !==0 )
            return {
                ...state, 
                cart: tempCart
            }
        
    }

    if( action.type === 'GET_TOTALS' ){
        /* 
        console.log(state.cart)
        0: {id: 1, title: "Samsung Galaxy S7", price: 599.99, img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png", amount: 1}
        1: {id: 2, title: "google pixel ", price: 499.99, img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png", amount: 1}
        2: {id: 3, title: "Xiaomi Redmi Note , price: 699.99, img: "img: "https://res.cloudinary.com/diqqf3eq2/image/upl"}
        */
        let { total, amount } = state.cart.reduce(
            ( cartTotal, cartItem )=> {
                const { price, amount } = cartItem;

                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;

            },{
                total: 0,
                amount: 0
            }
        )
        total = parseFloat( total.toFixed(2) );
        return { ...state, total, amount }
    }

    if( action.type === 'LOADING' ){
        return { ...state, loading: true }
    }
    if( action.type === 'DISPLAY_ITEMS' ){
        return { ...state, cart: action.payload, loading: false}
    }

    return state
}

export default reducer;