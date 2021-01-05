import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;


export const LabelStyled = styled.label`
  color: ${(props) => {
    if (props.hasErrors) return props.theme.colorCaution;
    if (props.hasFocus) return props.theme.colorPrimary;
    return props.theme.colorBase;
  }};
`;

export const IconStyled = styled(FontAwesomeIcon)`
    position: absolute;
`;

export const InputStyled = styled.input`
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.hasErrors ? props.theme.colorCaution : props.theme.colorBase};
  border-radius: 3px;

  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${(props) => props.theme.colorPrimary};
    & + label {
      color: ${(props) => props.theme.colorPrimary};
    }
  }

  outline: none;

  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.colorBase};
`;


export const ErrorsStyled = styled(motion.div)`
    margin: 0;
`;

export const ErrorStyled = styled.p`
    color: ${props => props.theme.colorCaution};
    font-weight: bold;
    margin: 0 0 .5rem 0;
`;

export const ErrorIcon = styled(FontAwesomeIcon)`
    color: ${props => props.theme.colorCaution};
    margin-right: .5rem;
`;
