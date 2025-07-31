//import { useState } from 'react'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css'

function App() {
 
  
  return (
    <>
    <NavigationBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/products" element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="add-product" element={<AddProduct/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
