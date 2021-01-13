import React from "react";
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

export default function Button({ children, onClick, ...props }) {

  const handleClick = e => onClick(e);

  return <ButtonStyled {...props} onClick={handleClick} >{children}</ButtonStyled>;
}

/* Props */
export const POSITIVE = "positive";
export const CAUTION = "caution";
export const NEUTRAL = "neutral";

Button.propTypes = {
  /** Reflects the state of the button */
  variant: PropTypes.oneOf([POSITIVE, CAUTION, NEUTRAL]),
  /** What happens when the button is clicked */
  onClick: PropTypes.func.isRequired,  
};
