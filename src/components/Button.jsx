import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-size: 2rem;
        padding: 0.7em 2em;
        background-color: ${(BtnOutline) =>
            BtnOutline ? 'var(--transparent-dark)' : 'var(--white)'
        };
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${(BtnOutline) => 
            BtnOutline ? 'var(--white)' : 'var(--gray-1)'
        };
    }
    @media only screen and (max-width: 768px) {
        .button {
            font-size: 1.8rem;
        }
    }
`;

const Button = ({ 
    projectBtnLink ="Link",
     projectBtnTxt ="Text",
      BtnOutline,
     }) => {
    return (
        <ButtonStyle BtnOutline={BtnOutline} >
            <Link 
            to={ projectBtnLink } 
            className='button'>
                { projectBtnTxt }
            </Link>
        </ButtonStyle>
    )
}

export default Button
