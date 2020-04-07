import styled from "styled-components";
import * as states from "../../../styles/states";
import { POSITIVE, CAUTION, NEUTRAL } from "./Button";
import { smallShadow, tallShadow } from "../../../styles/shadows";

export default styled.button`
  cursor: pointer;
  ${({ type }) => mapTypeToStartingState(type)}

  border-radius: 3px;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  outline: none;

  transition: all 0.1s ease-in;

  ${smallShadow};

  &:hover {
    ${tallShadow};
    transform: translate(1px, -1px);
  }

  &:active {
    ${smallShadow};
    transform: translate(0, 0);
  }
`;

function mapTypeToStartingState(type) {
  switch (type) {
    case POSITIVE:
      return states.positive;
    case CAUTION:
      return states.caution;
    case NEUTRAL:
      return states.neutral;
    default:
      return states.positive;
  }
}
