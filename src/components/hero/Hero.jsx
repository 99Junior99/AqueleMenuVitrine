import React from 'react'
import { motion } from "framer-motion";


import dish from "../../assets/food/roasted-chicken-dinner-platter-delicious-feast.png"
import "./Hero.css"
const Hero = () => {
    return (
        <div className='banner'>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}

                transition={{ duration: 1 }}
            >
                <div className='content'>
                    <motion.div className='text'
                        animate={{ x: -50 }}
                        transition={{ duration: 1 }}>
                        <h2>O Seu <span className='sub' >Cardápio</span></h2>
                        <span className='msg'>explore diversos sabores em um cardápio totalmente personalizado para você.</span>
                    </motion.div>
                    <div className='ball1'></div>
                    <img src={dish} alt="" />
                    <div className='ball2'></div>
                </div>

            </motion.div>


        </div>
    )
}

export default Hero
