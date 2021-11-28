import React from 'react'
import styled from 'styled-components'
import AboutImg from '../assets/images/about-page-img.jpg'
import Button from './Button';
import PTxt from './PTxt'
import SectionTitle from './SectionTitle'

const AboutSectionStyle = styled.div`
    margin-top: 40rem;
    .container{
        width: 90%;
        max-width: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
    }
    .aboutSection__left{
        width: 50%;
        height: 600px;
        img{
            border-radius: 8px;
        }
    }
    .aboutSection__right{
        width: 50%;
        min-height: 400px;
        background-color: #303137;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        margin-left: -150px;
        border-radius: 8px;
    }
    .aboutSection__button{
        display: flex;
        justify-content: center;
    }
    .title,
    .p{
        text-align: left;
    }
    @media only screen and (max-width: 768px) {
        .container{
            flex-direction: column;
            width: 100%;
            // margin: 0 20px;
        }
        .aboutSection__left{
            width: 100%;
            height: 400px;
        }
        .aboutSection__right{
            width: 90%;
            margin: 0;
            margin-top: -100px;
        }
    }
`;

const AboutSection = () => {
    return (
        <AboutSectionStyle>
            <div className="container">
                <div className="aboutSection__left">
                    <img src={AboutImg} alt="" />
                </div>
                <div className="aboutSection__right">
                    <div>
                        <SectionTitle 
                            className='section__title'
                            SubHeading='Let me introduce myself'
                            Heading='About me'
                        />
                        <PTxt >
                            My name is Abdulkareem Tukur, I am a frontend wed developer from Kaduna, Nigeria. 
                            I create professional Websites and Web Applications. I like making my Websites 
                            unique and refreshing to impress.
                        </PTxt>
                        <div className="aboutSection__button">
                            <Button
                                projectBtnLink='/about'
                                projectBtnTxt='Read More'
                                BtnOutline={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AboutSectionStyle>
    )
}

export default AboutSection
