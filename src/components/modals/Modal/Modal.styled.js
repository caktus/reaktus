
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { keyAndAmbientShadows } from '../../../styles/shadows';
import { colorBackground } from '../../../styles/colors';

export const StyledShade = styled(motion.div)`
  z-index: 999;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledModal = styled(motion.div)`
  position: absolute;
  background-color: ${colorBackground};
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 500px;
  height: 300px;
  ${keyAndAmbientShadows.dp4};
`;


/**
 *   top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: auto;
 */
