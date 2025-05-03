import { createStore } from "vuex";

let store = createStore({
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        token: localStorage.getItem('token') || null,
        orderId: localStorage.getItem('orderId') || null,
        IyzicoToken: localStorage.getItem('IyzicoToken') || null
    },
    mutations: {
        addToCart(state, item){
            let existingItem = state.cart.find((cartItem) => cartItem.productId === item.productId);

            if(existingItem){
                alert("Ürün zaten sepette!");
            }else{
                state.cart.push(item);
            }

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        deleteFromCart(state, productId){
            let index = state.cart.findIndex((cartItem) => cartItem.productId === productId);

            state.cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        saveToken(state, token){
            state.token = token;
            localStorage.setItem('token', token);
        },
        saveIyzicoToken(state, token){
            state.IyzicoToken = token;
            localStorage.setItem('IyzicoToken', token);
        },
        saveOrderId(state, id){
            state.orderId = id;
            localStorage.setItem('orderId', id);
        },
        clearToken(state){
            state.token = null;
            localStorage.removeItem('token');
        }
    },
    getters: {
        cartItems: (state) => state.cart,
        cartTotal: (state) => state.cart.reduce((total, item) => total + item.quantity * item.price, 0)
    }
})

export default store;