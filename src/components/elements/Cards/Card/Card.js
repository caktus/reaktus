import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Card.styled';

const Card = ({ onClick, children, ...props}) => {
  return (
    <Styled.Card
      onClick={onClick} 
      {...props}
    >
      {children}
    </Styled.Card>
  );
}

Card.propTypes = {
  /** If provided, hover and click animations will apply to the card  */
  onClick: PropTypes.func,
  /** Card accepts variants. 'interactive' variant applies interactive styling */
  variant: PropTypes.oneOf(['normal', 'interactive'])
};

Card.defaultProps = {
  variant: 'normal',
};

export default Card;
