import styled, { css } from 'styled-components';
import { keyAndAmbientShadows } from '../../../../styles/shadows';

export const CardStyled = styled.div`
    min-height: 20rem;
    min-width: 15rem;
    border-radius: 20px;
    ${keyAndAmbientShadows.dp6};

    transition: all 0.1s ease-in;

    ${props => {
        if (props.onClick) {
            return css`
                &:hover {
                    transform: translateY(-1px);
                    ${keyAndAmbientShadows.dp12}
                }

                &:active {
                    transform: translateY(1px);
                    ${keyAndAmbientShadows.dp2}
                }
            `;
        }
    }}
`;
