import styled from "styled-components";
import { variant, color, typography, position, space, layout, border, fontSize, boxShadow } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const Label = styled.label`
  ${color};
  ${position};
  ${space};
  ${layout};
  ${typography};
`;
Label.propTypes = {
  ...color.propTypes,
  ...position.propTypes,
  ...space.propTypes,
  ...layout.propTypes,
  ...typography.propTypes,
}
Label.defaultProps = {
  color: 'text',
}

export const Icon = styled(FontAwesomeIcon)(
  {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  position,
  variant({
    scale: "inputStates",
    variants: {
      normal: {
        color: "border",
      },
      error: {
        color: "caution",
      },
      disabled: {
        color: "disabled",
      },
    },
  })
);
Icon.propTypes = {
  ...position.propTypes,
}
Icon.defaultProps = {
  right: 2,
}

export const Input = styled("input")(
  {
    width: "100%",
    outline: "none",
  },
  border,
  space,
  layout,
  fontSize,
  boxShadow,
  typography,
  variant({
    scale: "inputStates",
    variants: {
      normal: {
        "&:focus": {
          borderColor: "primary",
        },
        "& ~ svg": {
          color: "primary",
        }
      },
      error: {
        borderColor: "caution",
      },
      disabled: {
        borderColor: "disabled",
      },
    },
  })
);
Input.propTypes = {
  ...border.propTypes,
  ...space.propTypes,
  ...layout.propTypes,
  ...fontSize.propTypes,
  ...boxShadow.propTypes,
  ...typography.propTypes,
}
Input.defaultProps = {
  border: '2px solid',
  borderColor: 'border',
  borderRadius: 'standard',
  py: 2,
  px: 3,
  color: 'text',
  fontSize: 2
}


export const Errors = styled(motion.div)`
    ${space};
    ${layout}
`;
Errors.propTypes = {
  ...space.propTypes,
  ...layout.propTypes,
}
Errors.defaultProps = {
  m: 0,
}

export const Error = styled.p`
    ${color};
    ${typography};
    ${space};
`;
Error.propTypes = {
  ...color.propTypes,
  ...typography.propTypes,
  ...space.propTypes,
}
Error.defaultProps = {
  color: 'caution',
  mb: 1,
  fontWeight: 'bold',
}

export const ErrorIcon = styled(FontAwesomeIcon)`
    ${color};
    ${space};
`;
ErrorIcon.propTypes = {
  ...color.propTypes,
  ...space.propTypes,
};

ErrorIcon.defaultProps = {
  color: 'caution',
  mr: 1
}
