import styled from "styled-components";
import * as states from "../../../styles/states";
import { POSITIVE, CAUTION, NEUTRAL } from "./Button";

export default styled.button`
  ${({ type }) => mapTypeToStartingState(type)}

  border-radius: 3px;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;

  &:hover {
    ${({ type }) => mapTypeToHoverState(type)}
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

function mapTypeToHoverState(type) {
  switch (type) {
    case POSITIVE:
      return states.positive;
    case CAUTION:
      return states.caution;
    case NEUTRAL:
      return states.positive;
    default:
      return states.positive;
  }
}
