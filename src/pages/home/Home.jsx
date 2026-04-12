import React from 'react'
//components
import Navbar from '../../components/navbar/Navbar.jsx'
import Hero from '../../components/hero/Hero.jsx';
import Foodcards from '../../components/food-card/Foodcards.jsx'
import "./Home.css"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Hero />
            <div className="products">
                <Foodcards />
            </div>

        </div>
    )
}

export default Home
