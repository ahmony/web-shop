import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Collection from './pages/Collection';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Single from './pages/Single';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App()
{
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/single/:name' element={<Single />}></Route>
        <Route path='/collection' element={<Collection />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
