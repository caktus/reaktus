import styled from "styled-components";
import * as states from "../../../styles/states";
import { POSITIVE, CAUTION, NEUTRAL } from "./Button";
import { keyAndAmbientShadows } from "../../../styles/shadows";

export default styled.button`
  cursor: pointer;
  ${({ type }) => mapTypeToStartingState(type)}

  border-radius: 3px;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  outline: none;

  transition: all 0.1s ease-in;

  ${keyAndAmbientShadows.dp2};

  &:hover {
    ${keyAndAmbientShadows.dp6};
    transform: translateY(-1px);
  }

  &:active {
    ${keyAndAmbientShadows.dp2};
    transform: translateY(1px);
    /* transform: translate(0, 0); */
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
// .btn {
//   position: relative;

//   overflow: hidden;

//   // border-width: 0;
//   // outline: none;
//   // border-radius: 2px;
//   // box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  
//   // background-color: #2ecc71;
//   // color: #ecf0f1;
  
//   transition: background-color .3s;
// }

// .btn:hover, .btn:focus {
//   background-color: #27ae60;
// }

// .btn > * {
//   position: relative;
// }

// .btn span {
//   display: block;
//   padding: 12px 24px;
// }

// .btn:before {
//   content: "";
  
//   position: absolute;
//   top: 50%;
//   left: 50%;
  
//   display: block;
//   width: 0;
//   padding-top: 0;
    
//   border-radius: 100%;
  
//   background-color: rgba(236, 240, 241, .3);
  
//   -webkit-transform: translate(-50%, -50%);
//   -moz-transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
//   -o-transform: translate(-50%, -50%);
//   transform: translate(-50%, -50%);
// }

// .btn:active:before {
//   width: 120%;
//   padding-top: 120%;
  
//   transition: width .2s ease-out, padding-top .2s ease-out;
// }