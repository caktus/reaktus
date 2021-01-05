import styled from 'styled-components';
import {
  layout,
  position,
  size,
  boxShadow,
  color,
  border,
  variant,
} from "styled-system";

export const Card = styled.div`
  ${size};
  ${position};
  ${layout};
  ${boxShadow};
  ${color};
  ${border}

  transition: all 0.1s ease-in;

  ${variant({
    variants: {
      normal: {
        boxShadow: "depth3",
      },
      interactive: {
        cursor: "pointer",
        boxShadow: "depth3",
        "&:hover": {
          boxShadow: "depth4",
        },
        "&:active": {
          boxShadow: "depth2",
        },
      },
    },
  })}
`;
Card.propTypes = {
  ...size.propTypes,
  ...position.propTypes,
  ...layout.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...border.propTypes,
}
Card.defaultProps = {
  p: 2,
  minHeight: 5,
  minWidth: 4,
  border: 'none',
  borderRadius: '20px',
  variant: 'normal'
};
