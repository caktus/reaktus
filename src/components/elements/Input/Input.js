import React from "react";
import PropTypes from 'prop-types';
import * as Styled from "./Input.styled";
import { AnimatePresence } from 'framer-motion';
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

export const NORMAL = "normal";
export const ERROR = "error";
export const DISABLED = "disabled";

const Input = React.forwardRef(({ value, onChange, errors, type, icon, variant, onFocus: innerFocus, onBlur: innerBlur, ...props }, ref) => {
  const inputRef = React.useRef();
  const [hasFocus, setHasFocus] = React.useState(false);

  React.useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }))

  const _handleFocus = e => {
    if (innerFocus) innerFocus(e);
    setHasFocus(true)
  }
  const _handleBlur = (e) => {
    if (innerBlur) innerBlur(e);
    setHasFocus(false)
  }

  const getVariant = () => {
    if (variant) return variant;
    if (errors?.length > 0) return ERROR;
    if (props.disabled) return DISABLED;
    else return NORMAL;
  }

  const renderIcon = (focused, variant) => {
    if (!icon) return null;
    if (typeof icon === "function") return icon({ hasFocus: focused , variant });
    if (typeof icon === "object") return <Styled.Icon icon={icon} hasFocus={hasFocus} variant={variant} />;
  }

  return (
    <Styled.InputWrapper>
      {renderIcon(hasFocus, getVariant())}
      <Styled.Input
        variant={getVariant()}
        ref={inputRef}
        value={value}
        onChange={onChange}
        onFocus={_handleFocus}
        onBlur={_handleBlur}
        type={type}
        errors={errors}
        {...props}
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
  value: PropTypes.string,
  onChange: PropTypes.func,
  /** A list of error messages */
  errors: PropTypes.arrayOf(PropTypes.string)
};

Input.defaultProps = {
  type: INPUT_TYPES.TEXT,
};

Input.Label = function({ errors, children, ...props }) {
  return (
    <Styled.Label errors={errors} {...props}>{children}</Styled.Label>
  )
}

Input.Errors = function ({ errors, errorIcon, ...props }) {
  return (
    <AnimatePresence>
      {errors?.length > 0 && (
        <Styled.Errors
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ delayChildren: 0.5 }}
          {...props}
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
