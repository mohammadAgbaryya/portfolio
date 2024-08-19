import React from 'react';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const balloonStyle = css`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  animation: float 10s linear infinite;
`;

const floatAnimation = css`
  @keyframes float {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-100vh);
    }
  }
`;

const Balloon = ({ img, style }) => (
  <motion.div
    css={[balloonStyle, floatAnimation]}
    style={{
      backgroundImage: `url(${img})`,
      ...style,
    }}
  />
);

export default Balloon;
