import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Single from './pages/Single';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App()
{
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Orange t-shirt',
      price: 35,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      quantity: 3,
      img: '../img/product1.jpg'
    },
    {
      id: 2,
      title: 'Traveller bag',
      price: 55,
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      quantity: 5,
      img: '../img/product2.jpg'
    },
    {
      id: 3,
      title: 'Sunglasses',
      price: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptates eveniet temporibus, modi libepturi!',
      quantity: 1,
      img: '../img/product3.jpg'
    }
  ]);

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home items={items} />}></Route>
        <Route path='/single/:name' element={<Single items={items} />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
