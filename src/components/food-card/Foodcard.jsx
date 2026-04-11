import React from 'react'


//image
import food from "../../assets/food/roasted-chicken-dinner-platter-delicious-feast.png"

import './Foodcard.css'

const Foodcard = () => {
    return (

        <div className='card'>
            <div className='img-container'><img src={food} alt="" /></div>

            <div className="text">
                <h2 className='title'>asas</h2>
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                <span className='price'>R$: 10,00</span>

            </div>

        </div>


    )
}

export default Foodcard
