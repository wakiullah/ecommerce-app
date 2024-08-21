import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Login from './Pages/Login';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import MenBanner from './assets/banner_mens.png'
import WomenBanner from './assets/banner_women.png'
import KidsBanner from './assets/banner_kids.png'
import Signup from './Pages/Signup';
import ProtectedRoutes from './Components/ProctedRoutes/ProtectedRoutes';
import Profile from './Pages/Profile';

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/women' element={<ShopCategory banner={WomenBanner} category="women" />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/men' element={<ShopCategory banner={MenBanner} category="men" />} />
        <Route path='/kids' element={<ShopCategory banner={KidsBanner} category='kid' />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>


      </Routes>
      <Footer />

    </BrowserRouter>

  )
}

export default App
