import React from "react";
import styled from "styled-components";

export default function FlexCol({ children }) {
  return <FlexColStyled>{children}</FlexColStyled>;
}

const FlexColStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

    > * {
        margin: .5rem;
    }
`;
