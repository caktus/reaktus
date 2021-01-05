import React from "react";
import PropTypes from 'prop-types';
import ButtonStyled from './Button.styled';

export default function Button({ children, onClick, ...props }) {

  const handleMouseUp = e => onClick(e);

  return <ButtonStyled {...props} onMouseUp={handleMouseUp} >{children}</ButtonStyled>;
}

/* Props */
export const POSITIVE = "positive";
export const CAUTION = "caution";
export const NEUTRAL = "neutral";

Button.propTypes = {
  /** Reflects the state of the button */
  type: PropTypes.oneOf([POSITIVE, CAUTION, NEUTRAL]),
  /** What happens when the button is clicked */
  onClick: PropTypes.func.isRequired,  
  /** Buttons accept color settings */
  theme: PropTypes.shape({
    colorPrimary: PropTypes.string,
    colorCaution: PropTypes.string,
    colorSuccess: PropTypes.string,
    colorWarning: PropTypes.string,
    colorBase: PropTypes.string,
  }),
};

Button.defaultProps = {
  type: POSITIVE,  theme: {
    colorPrimary: "#89af5b",
    colorCaution: "#b04846",
    colorSuccess: "#89af5b",
    colorBase: "#82908d",
  },
};


/**
 * 
 */