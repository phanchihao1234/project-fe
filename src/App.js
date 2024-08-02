import React from 'react'
import Home from './pages/home/Home'
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./style.css"
import Contact from './pages/contact/Contact';

export default function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </>
    )
}
