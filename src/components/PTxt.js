import React from 'react'
import styled from 'styled-components';

const PSetyles = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height: 1.3em;
text-align: center;
color: orange;
@media only screen and (max-width: 768px){
    p{
        font-size: 1.25rem;
        color: var(--white);
    }
}
`;

const PTxt = ({children}) => {
    return (
        <PSetyles>
            <p>
                {children}
            </p>
        </PSetyles>
    )
}

export default PTxt
