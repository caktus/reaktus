import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorWhite, colorPrimary, colorGrey, colorCaution } from "../../../styles/colors";
import { motion } from "framer-motion";

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;


export const LabelStyled = styled.label`
    position: absolute;
    top: 30%;
    left: 15%;

    letter-spacing: 0.7px;
    font-family: inherit;
    font-size: 0.8rem;

    padding: 0;
    background: transparent;
    transition: all 0.2s ease-in-out, background 0.1s linear;

    pointer-events: none;

    color: ${props => props.hasErrors ? colorCaution : colorGrey};

    ${(props) => {
        if (props.labelTranslated) {
            return css`
              transform: translate(-10%, -125%) scale(0.8);
              background: ${colorWhite};
              padding: 0 0.4rem;
            `;
        }
    }}
`;

export const IconStyled = styled(FontAwesomeIcon)`
    position: absolute;
`;

export const InputStyled = styled.input`
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.hasErrors ? colorCaution : colorGrey};
    border-radius: 3px;

    transition: all 0.2s ease-in-out;

    &:focus {
        border-color: ${colorPrimary};
        & + label {
            color: ${colorPrimary};
        }
    }


    outline: none;

    padding: 0.5rem 1rem;
    font-size: 1rem;
    color: ${colorGrey};
`;


export const ErrorsStyled = styled(motion.div)`
    margin: 0;
`;

export const ErrorStyled = styled.p`
    color: ${colorCaution};
    font-weight: bold;
    margin: 0 0 .5rem 0;
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
    color: ${colorCaution};
    margin-right: .5rem;
`;
