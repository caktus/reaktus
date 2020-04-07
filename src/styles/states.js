import { css } from 'styled-components'
import { colorPrimary, colorWhite, colorCaution } from './colors';

export const positive = css`
    background: ${colorPrimary};
    border: 1px solid ${colorPrimary};
    color: ${colorWhite};
`
export const caution = css`
  background: ${colorCaution};
  border: 1px solid ${colorCaution};
  color: ${colorWhite};
`;

export const neutral = css`
  background: ${colorWhite};
  border: 1px solid ${colorPrimary};
  color: ${colorPrimary};
`;