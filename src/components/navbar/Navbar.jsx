import React from 'react'

import "./Navbar.css"
import Cat from '../categorie/Cat'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
    return (


        <nav class="nav">
            <div className='nav-up'>
                <h2 class="log">LOGO</h2>


                <div clasName='sb'>
                    <button className='s-btn'> <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" /></svg>
                    </button>
                    <input placeholder='Pesquise seus pratos...' type='text' className="search-bar" />
                </div>
                <div className='icons'>
                    <button className='chart-btn'><svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" /></svg></button>
                </div>
            </div>


            <div className="nav-down">

                <div className="categories">
                    <Cat />
                    <Cat />
                    <Cat />
                    <Cat />
                    <Cat />
                    <Cat />
                    <Cat />
                    <Cat />
                </div>

            </div>
        </nav>



    )
}

export default Navbar
