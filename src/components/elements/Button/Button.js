import React from "react";
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

export default function Button({ children, onClick, ...props }) {
  return <ButtonStyled {...props} onClick={onClick}>{children}</ButtonStyled>;
}

/* PropTypes */
export const POSITIVE = "positive";
export const CAUTION = "caution";
export const NEUTRAL = "neutral";

Button.propTypes = {
  type: PropTypes.oneOf(POSITIVE, CAUTION, NEUTRAL)
}

Button.defaultProps = {
  type: POSITIVE
};