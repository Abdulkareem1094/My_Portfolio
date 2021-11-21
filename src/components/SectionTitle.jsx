import React from 'react'
import styled from 'styled-components'

const SectionTitleStyle = styled.div`
    text-align: center;
    p{
        font-family: 'RobotoMono Regular';
        font-size: 2rem;
    }
    h2{
        font-family: 'Montserrat Bold';
        font-size: 6rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px){
        p{
            font-size: 1.2rem;
        }
        h2{
            font-size: 3.6rem;
        }
    }
`;

const SectionTitle = ({
    SubHeading='this is the sub heading',
    Heading='this is the heading'
}) => {
    return (
        <SectionTitleStyle className='title'>
            <p>{SubHeading}</p>
            <h2>{Heading}</h2>
        </SectionTitleStyle>
    )
}

export default SectionTitle
