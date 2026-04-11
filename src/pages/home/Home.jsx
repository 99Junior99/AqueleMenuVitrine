import React from 'react'
//components
import Navbar from '../../components/navbar/Navbar.jsx'
import Foodcard from '../../components/food-card/Foodcard.jsx'
import "./Home.css"

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="products">
                <Foodcard />
                <Foodcard />
                <Foodcard />
                <Foodcard />
                <Foodcard />
                <Foodcard />
                <Foodcard />
                <Foodcard />
            </div>

        </div>
    )
}

export default Home
