import React from "react";
import PropTypes from 'prop-types';
import * as Styled from "./Input.styled";
import { AnimatePresence } from 'framer-motion';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const NORMAL = "normal";
export const ERROR = "error";
export const DISABLED = "disabled";

const Input = React.forwardRef(({ value, onChange, errors, type, icon, variant, ...props }, ref) => {
  const inputRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }))

  const getVariant = () => {
    if (variant) return variant;
    if (errors?.length > 0) return ERROR;
    if (props.disabled) return DISABLED;
    else return NORMAL;
  }

  return (
    <Styled.InputWrapper>
      {icon && <Styled.Icon icon={icon} variant={getVariant()} />}
      <Styled.Input
        variant={getVariant()}
        ref={inputRef}
        value={value}
        onChange={onChange}
        type={type}
        errors={errors}
      />
    </Styled.InputWrapper>
  );
});

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
  /** A list of error messages */
  errors: PropTypes.arrayOf(PropTypes.string)
};

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
};

Input.Label = function({ errors, children }) {
  return (
    <Styled.Label errors={errors}>{children}</Styled.Label>
  )
}

Input.Errors = function ({ errors, errorIcon }) {
  return (
    <AnimatePresence>
      {errors?.length > 0 && (
        <Styled.Errors
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ delayChildren: 0.5 }}
        >
          {errors?.map((error) => (
            <Styled.Error key={error}>
              <Styled.ErrorIcon icon={errorIcon || faExclamationCircle} />
              {error}
            </Styled.Error>
          ))}
        </Styled.Errors>
      )}
    </AnimatePresence>
  );
};

export default Input;
  /* {label && (
            <LabelStyled
              theme={theme}
              className={labelClassname}
              hasErrors={hasErrors}
              hasFocus={hasFocus}
            >
              {label}
            </LabelStyled>
          )} */