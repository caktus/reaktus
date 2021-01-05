import styled, { css } from "styled-components";
import { POSITIVE, CAUTION, NEUTRAL } from "./Button";
import { keyAndAmbientShadows } from "../../../styles/shadows";

export default styled.button`
  cursor: pointer;

  ${({ type, theme }) => {
    if (type === POSITIVE) return css`
      background: ${theme.colorPrimary};
      border: 1px solid ${theme.colorPrimary};
      color: #fff;
    `;

    if (type === CAUTION) return css`
      background: ${theme.colorCaution};
      border: 1px solid ${theme.colorCaution};
      color: #fff;
    `;

    if (type === NEUTRAL) return css`
      background: #fff;
      border: 1px solid ${theme.colorPrimary};
      color: ${theme.colorPrimary};
    `;

  }}

  border-radius: 3px;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  outline: none;

  transition: all 0.1s ease-in;

  ${keyAndAmbientShadows.dp2};

  &:hover {
    ${keyAndAmbientShadows.dp6};
    transform: translateY(-1px);
  }

  &:active {
    ${keyAndAmbientShadows.dp2};
    transform: translateY(1px);
    /* transform: translate(0, 0); */
  }
`;
