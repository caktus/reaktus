import { css } from 'styled-components'
import { colorPrimary, colorWhite, colorCaution } from './colors';
import { darken } from './utils';

export const positive = css`
    background: ${colorPrimary};
    border: 1px solid ${colorPrimary};
    color: ${colorWhite};
`

export const positiveHover = css`
    background: ${darken(colorPrimary)};
    border: 1px solid ${darken(colorPrimary)};
    color: ${colorWhite};
`;

export const caution = css`
  background: ${colorCaution};
  border: 1px solid ${colorCaution};
  color: ${colorWhite};
`;

export const cautionHover = css`
  background: ${darken(colorCaution)};
  border: 1px solid ${darken(colorCaution)};
  color: ${colorWhite};
`;


export const neutral = css`
  background: ${colorWhite};
  border: 1px solid ${colorPrimary};
  color: ${colorPrimary};
`;

export const neutralHover = css`
  border: 1px solid ${darken(colorPrimary)};
  color: ${colorWhite};
`;
