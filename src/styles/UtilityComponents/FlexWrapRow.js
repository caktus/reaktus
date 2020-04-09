import React from 'react';
import styled from 'styled-components';


export default function FlexRow({ children }) {
    return <FlexRowStyled>{children}</FlexRowStyled>
}

const FlexRowStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;
