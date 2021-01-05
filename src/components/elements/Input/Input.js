import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  InputWrapper,
  InputStyled,
  IconStyled,
  LabelStyled,
  ErrorsStyled,
  ErrorStyled,
  ErrorIcon,
} from "./Input.styled";
import { AnimatePresence } from 'framer-motion';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Input = ({ label, icon, errors, theme, wrapperClassname, inputClassname, labelClassname, errorClassname, errorIcon, ...props}) => {
    const [hasFocus, setHasFocus] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
      if (props.value && errors && errors.length > 0) console.log('SHOW ERRORS')
      if (props.value && errors && errors.length > 0) setHasErrors(true);
      else setHasErrors(false);
    },[errors, props.value])

    const handleBlur = e => {
      if (e.target.value === '') setHasFocus(false);
    }

    const handleFocus = () => {
      setHasFocus(true);
    }


    return (
      <>
        <InputWrapper theme={theme} className={wrapperClassname}>
          {icon && <IconStyled icon={icon} />}
          {label && (
            <LabelStyled
              theme={theme}
              className={labelClassname}
              hasErrors={hasErrors}
              hasFocus={hasFocus}
            >
              {label}
            </LabelStyled>
          )}
          <InputStyled
            {...props}
            theme={theme}
            className={inputClassname}
            hasErrors={hasErrors}
            hasFocus={hasFocus}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </InputWrapper>
        <AnimatePresence>
          {hasErrors && (
            <ErrorsStyled
              theme={theme}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ delayChildren: 0.5 }}
            >
              {errors &&
                errors.map((error) => (
                  <ErrorStyled theme={theme} errorClassname={errorClassname}>
                    <ErrorIcon icon={errorIcon || faExclamationCircle} />
                    {error}
                  </ErrorStyled>
                ))}
            </ErrorsStyled>
          )}
        </AnimatePresence>
      </>
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
  /** Inputs accept color settings */
  theme: PropTypes.shape({
    colorPrimary: PropTypes.string,
    colorCaution: PropTypes.string,
    colorSuccess: PropTypes.string,
    colorWarning: PropTypes.string,
    colorBase: PropTypes.string,
  }),
};

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
  theme: {
    colorPrimary: "#89af5b",
    colorCaution: "#b04846",
    colorSuccess: "#89af5b",
    colorBase: "#82908d",
  },
};

export default Input;
