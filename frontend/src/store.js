import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderDeliverReducer,
    orderListMyReducer,
    orderListReducer,
  } from './reducers/orderReducers'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const initialState = {
    cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
    },
    userLogin:{ userInfo: userInfoFromStorage},
}
// const middleWare = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)))



export default store
