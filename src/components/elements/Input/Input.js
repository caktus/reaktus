import React from 'react';
import PropTypes from 'prop-types';
import { InputWrapper, InputStyled, LabelStyled } from "./Input.styled";

const Input = ({ label, className, ...props}) => {
    // **WIP
    return (
        <InputWrapper className={className}>
            {label && <LabelStyled>{label}</LabelStyled>}
            <InputStyled {...props} />
        </InputWrapper>
    );
}

export const INPUT_TYPES = {
    TEXT: 'text',
    URL: 'url',
    PASSWORD: 'password',
    EMAIL: 'email'
}

Input.propTypes = {
  /** \<Input\> is for basic text-type inputs */
  type: PropTypes.oneOf(Object.values(INPUT_TYPES)),
  /** Inputs are fully controlled, so `value` is required */
  value: PropTypes.string.isRequired,
  /** Inputs are fully controlled, so `onChange` is required */
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: INPUT_TYPES.TEXT
};

export default Input;
