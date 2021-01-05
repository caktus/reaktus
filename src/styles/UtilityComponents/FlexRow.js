import React from 'react';
import styled from 'styled-components';


export default function FlexRow({ children }) {
 return <FlexRowStyled>{children}</FlexRowStyled>
}

const FlexRowStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 1.5em;
`;
