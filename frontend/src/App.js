import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import RegisterScreen from './screens/RegisterScreen'
import CartScreen from './screens/CartScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import LoginScreen from './screens/LoginScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <Header />
      <main className = 'py-3'>
        <Container>
          <Routes>
            {/* <Route path='/shipping' element={<ShippingScreen/>} /> */}
            <Route path='/login'>
              <Route path = 'shipping' element={<ShippingScreen/>}  />
              <Route path = '' element={<LoginScreen/>}  />
            </Route>
            <Route path='/order/:id' element={<OrderScreen/>} />
            <Route path='/payment' element={<PaymentScreen/>} />
            <Route path='/placeorder' element={<PlaceOrderScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/profile' element={<ProfileScreen/>} />
            <Route path = '/product/:id' element = {<ProductScreen/>}/>
            <Route path = '/cart'>
              <Route path = ':id' element = { <CartScreen/> } />
              <Route path = '' element = { <CartScreen/> } />
            </Route>
            <Route path = '/' element={ <HomeScreen/>} exact/>
          </Routes>
          
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
