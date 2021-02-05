import styled from "styled-components";
import { variant, space, layout, border, color, fontSize, boxShadow, typography } from "styled-system";

const ButtonStyled = styled("button")(
  {
    transition: "all 0.1s ease-in",
    cursor: 'pointer',
  },
  variant({
    scale: "buttons",
    variants: {
      positive: {
        color: "white",
        bg: "primary",
        borderColor: "primary",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "depth4",
        },
        "&:active": {
          boxShadow: "depth2",
          transform: "translateY(1px)",
        },
        "&:focus": {
          outline: "2px solid",
          outlineBorderRadius: "standard",
          outlineColor: "primary",
          outlineOffset: "4px",
        },
      },
      neutral: {
        color: "primary",
        bg: "white",
        borderColor: "primary",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "depth4",
        },
        "&:active": {
          boxShadow: "depth2",
          transform: "translateY(1px)",
        },
        "&:focus": {
          outline: "2px solid",
          outlineBorderRadius: "standard",
          outlineColor: "primary",
          outlineOffset: "4px",
        },
      },
      caution: {
        color: "white",
        bg: "caution",
        borderColor: "caution",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "depth4",
        },
        "&:active": {
          boxShadow: "depth2",
          transform: "translateY(1px)",
        },
        "&:focus": {
          outline: "2px solid",
          outlineBorderRadius: "standard",
          outlineColor: "caution",
          outlineOffset: "4px",
        },
      },
    },
  }),
  color,
  border,
  boxShadow,
  space,
  layout,
  fontSize,
  typography
);
ButtonStyled.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
  ...layout.propTypes,
  ...border.propTypes,
  ...fontSize.propTypes,
  ...boxShadow.propTypes,
  ...typography.propTypes,
};
ButtonStyled.defaultProps = {
  border: "standard",
  borderRadius: "standard",
  m: 0,
  px: 3,
  py: 2,
  fontSize: 2,
  maxHeight: 5,
  boxShadow: "depth3",
  variant: 'positive',
};

export default ButtonStyled;

