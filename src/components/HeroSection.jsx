import React from 'react'
import HeroImg from '../assets/images/hero.jpg'
import Button from './Button'
import PTxt from './PTxt'
import SocialMediaArrow from '../assets/images/social-media-arrow.svg'
import ScroleDownArrow from '../assets/images/scroll-down-arrow.svg'
import Styled from "styled-components";

const HeroStyles = Styled.div`
    .hero{
        hight: 100vh;
        min-hight: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        align-item: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading {
        font-size: 2rem;
        margin-bottom: -3.7rem;
        position: relative;
        margin-top: 150px;
        span{
            display: inline-block;
            width: 100%;
        }
        .hero__name{
            font-size: 7rem;
            font-family: 'Montserrat SemiBold';
            color: var(--white);
        }
    }
    .hero__img{
        max-width: 900px;
        width: 100%;
        height: 600px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
        border-radius: 8px;
        padding: 1px;
        img{
            border-radius: 8px;
        }
    }
    .hero__info{
        margin-top: -18rem;
        .p{
            color: var(--white);
        }
    }
    .hero__socials,
    .hero__scroleDown{
        display: flex;
        flex-direction: column;
        gap:2rem;
        position: absolute;
        buttom: 20px;
        width: 50px;
    }
    .hero__socials{
        left: 50px;
    }
    .hero__scroleDown{
        right: 50px;
    }
    .hero__socials__indicator,
    .hero__scroleDown{
        width: 50px;
        p{
            font-size: 1.6rem;
            transform: translateY(-70px) rotate(90deg);
            letter-spacing: 0.7rem;
            text-transform: uppercase;
        }
        img{
            max-height: 45px;
            width: 16px;
            margin: 0 auto;
            object-fil: contain;
        }
    }
    .hero__scroleDown{
        img{
            max-height: 100px;
        }
    }
    .hero__socialImg{
        ul{
            li{
                margin-bottom: 1rem;
            }
            a{
                diasplay: inline-block;
                font-size: 1.6rem;
            }
        }
    }
    @media only screen and (max-width: 768px){
        .hero{
            min-height: 1.4rem;
            margin-bottom: -3rem;
             .hero__name{
                font-size: 3.5rem;
            }
        }
        .hero__heading{
            margin-bottom: -2rem;
        }
        .hero__img{
            height: 300px;
        }
        .hero__info{
            margin-top: 1rem;
            .p{
                color: var(--gray-1);
            }
        }
        .hero__socials{
            left: 0px;
            bottom: -30%;
            width: 20px;
            .hero__socials__indicator{
                width: 20px;
                p{
                    font-size: 1.2rem;
                }
                img{
                    max-height: 50px;
                }
            }
            .hero__socialImg{
                ul{
                    li{
                        a{
                            font-size: 1.2rem;
                            margin-bottom: 1rem;
                        }
                    }
                }
            }
        }
        .hero__scroleDown{
            right: 0;
            width: 20px;
            gap: 1rem;
            // bottom: 5%;
            p{
                font-size: 1.3rem;
            }
        }
    }
`;

const HeroSection = () => {
    return (
        <HeroStyles>
            <div className='hero'>
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hello, This is</span>
                        <span className='hero__name'>Abdulkareem</span>
                    </h1>
                    <div className="hero__img">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="hero__info">
                        <PTxt>
                            I am working as a freelance web developer.<br />
                            I love making unique Wab Apps that
                            give users new experiences.
                        </PTxt>
                        <Button
                            projectBtnLink='/projects'
                            projectBtnTxt='See My Work'
                            BtnOutline={true}
                        />
                    </div>
                    <div className='hero__socials'>
                        <div className="hero__socials__indicator">
                            <p>Follow</p>
                            <img src={SocialMediaArrow} alt='Social Media Arrow ' />
                        </div>
                        <div className="hero__socialImg">
                            <ul>
                                <li>
                                    <a href="http://facebook.com" target='_blank'
                                        rel='noreferrer'
                                    > FB </a>
                                </li>
                                <li>
                                    <a href="http://twitter.com" target='_blank'
                                        rel='noreferrer'
                                    > TW </a>
                                </li>
                                <li>
                                    <a href="http://instagram.com" target='_blank'
                                        rel='noreferrer'
                                    > IG </a>
                                </li>
                                <li>
                                    <a href="http://youtube.com" target='_blank'
                                        rel='noreferrer'
                                    > YT </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__scroleDown">
                        <p>Scrole</p>
                        <img src={ScroleDownArrow} alt="Scrole Down Arrow" srcset="" />
                    </div>
                </div>
            </div>
        </HeroStyles>
    )
}

export default HeroSection;
