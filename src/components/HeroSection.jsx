import React from 'react'
import HeroImg from '../assets/images/hero.jpg'
import Button from './Button'
import PTxt from './PTxt'

const HeroSection = () => {
    return (
        <div>
            <div className="container">
                <h1 className="hero--heading">
                    <span>Hello, This is</span>
                    <span>Abdulkareem</span>
                </h1>
                <div className="hero--img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="hero__info">
                    <PTxt>
                        I am working as a freelance web developer.<br/>
                        I love making unique Wab Apps that 
                        give users new experiences.
                    </PTxt>
                    <Button 
                    projectBtnLink='/projects' 
                    projectBtnTxt='See My Work'
                    BtnOutline={true} 
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
