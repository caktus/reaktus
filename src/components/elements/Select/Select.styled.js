import styled, { css } from 'styled-components';
import { space, layout, color, border, fontSize, boxShadow } from 'styled-system'
import { BOTTOM, LEFT, RIGHT, TOP } from './Select';

export const Wrapper = styled.div`
  ${space}
  ${layout}
`;

export const Label = styled.label`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${fontSize}
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  ${space}
  ${layout}
  ${color}
  ${border}
  ${fontSize}
`;
Input.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
  ...color.propTypes,
  ...border.propTypes,
  ...fontSize.propTypes
}
Input.defaultProps = {
  border: 'standard',
  borderRadius: 'standard',
  borderColor: 'grey',
  py: 2,
  px: 3,
  fontSize: 2,
  color: 'black',
}

export const Dropdown = styled.div`
  display: ${props => props.showContainer ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  z-index: 99;
  ${({ containerPosition }) => {
    switch (containerPosition) {
      case TOP: return css`
        bottom: 100%; /* renders ABOVE the wrapper */
      `;
      case RIGHT: return css`
        left: 100%; /* renders RIGHT of the wrapper */
      `;
      case BOTTOM: return css`
        top: 100%; /* renders BELOW of the wrapper */
      `;
      case LEFT: return css`
        right: 100%; /* renders LEFT of the wrapper */
      `;
      default: return css`
        top: 100%; /* renders BELOW the wrapper */
      `;
    }
  }}
  min-width: 100%;
  ${layout}
  ${color}
  ${space}
  ${border}
  ${fontSize}
  ${boxShadow}
`;
Dropdown.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...layout.propTypes,
  ...border.propTypes,
  ...fontSize.propTypes,
  ...boxShadow.propTypes,
}
Dropdown.defaultProps = {
  border: 'standard',
  borderRadius: 'standard',
  borderColor: 'grey',
  m: 0,
  p: 0,
  bg: 'white',
  color: 'black',
  fontSize: 2,
  maxHeight: 5,
  boxShadow: undefined
}

export const OptionsList = styled.ul`
  overflow-y: scroll;
  list-style: none;
  ${layout}
  ${color}
  ${space}
`;
OptionsList.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...layout.propTypes,
};
OptionsList.defaultProps = {
  m: 0,
  p: 0,
  bg: "white",
};


export const Option = styled.li`
  cursor: pointer;
  ${color};
  ${space};
  &:focus {
    background: whitesmoke;
    outline: none;
  }
  &:hover {
    background: whitesmoke;
  }
`;
Option.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
}
Option.defaultProps = {
  px: 3,
  py: 1
}

/* &:focus {
    background: whitesmoke;
  }
  &:hover {
    background: whitesmoke;
  } */