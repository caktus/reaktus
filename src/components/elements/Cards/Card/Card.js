import React from 'react';
import PropTypes from 'prop-types';

import { CardStyled } from './Card.styled';

const Card = ({ onClick, children, ...props}) => {
  return (
    <CardStyled onClick={onClick} {...props}>
      {children}
    </CardStyled>
  );
}

Card.propTypes = {
  /** If provided, hover and click animations will apply to the card  */
  onClick: PropTypes.func
};

Card.defaultProps = {};

export default Card;
