import React from 'react'

import { motion } from "framer-motion";
//image
import carnedsol from "../../assets/food/pratos/carne-de-sol.jpg"
import feijoada from "../../assets/food/pratos/feijoada.jpg"
import bolodmilho from "../../assets/food/pratos/bolo-de-milho.png"
import cuzcuz from "../../assets/food/pratos/cuzcuz.png"
import camarao from "../../assets/food/pratos/camarao.jpg"
import tapioca from "../../assets/food/pratos/tapioca.png"
import pasteis from "../../assets/food/pratos/pasteis.png"
import bolodrolo from "../../assets/food/pratos/bolodrolo.png"
import assaí from "../../assets/food/pratos/assaí.png"
import milkshake from "../../assets/food/pratos/milkshake.jpg"

import './Foodcards.css'

const Foodcard = () => {
    return (
        <div>
            <div className='card-container'>
                {/*linha 1*/}

                <div className='card'>
                    <div className='img-container'>
                        <img src={carnedsol} alt="" />
                    </div>
                    <div className="text">
                        <h2 className='title'>carne de sol</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>
                </div>


                <div className='card'>
                    <div className='img-container'>
                        <img src={feijoada} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>feijoada</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={camarao} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>Camarão a moranga</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={cuzcuz} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>cuz cuz</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={tapioca} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>Tapioca recheada</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                {/*linha 2*/}

                <div className='card'>
                    <div className='img-container'>
                        <img src={pasteis} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>pasteis</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={bolodmilho} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>bolo de milho</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={bolodrolo} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>bolo de rolo</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={assaí} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>assaí com banana</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

                <div className='card'>
                    <div className='img-container'>
                        <img src={milkshake} alt="" />
                    </div>

                    <div className="text">
                        <h2 className='title'>milkshake de morango</h2>
                        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, vero?</span>
                        <span className='price'>R$: 10,00</span>
                        <button className='sm'>Saiba mais</button>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Foodcard
