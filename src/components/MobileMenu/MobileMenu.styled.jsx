import { motion } from 'framer-motion';
import styled from 'styled-components';


export const Nav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
`;

export const Wrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: #789ffb33;
  backdrop-filter: blur(100px);
`;
