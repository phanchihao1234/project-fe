import React from 'react'
import Home from './pages/home/Home'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./style.css"
import Contact from './pages/contact/Contact';
import Product from './pages/product/Product';
import NotFound from './pages/404/NotFound';
import ProductDetail from './pages/product/ProductDetail';
import Cart from './pages/cart/Cart';



export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/detail/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </HashRouter>
        </>
    )
}
