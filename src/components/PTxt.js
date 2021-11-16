import React from 'react'
import styled from 'styled-components';

const PSetyles = styled.div`
max-width: 500px;
margin: 0 auto;
font-size: 1.8rem;
line-height: 1.3rem;
text-align: center;
@media only screeen and (max-width: 768px){
    font-size: 1.4rem;
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
