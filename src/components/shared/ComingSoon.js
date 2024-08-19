import React from 'react';
import { css } from '@emotion/react';
import Balloon from './Balloon'; // Import Balloon component
import profilePic from '../../../imgs/profile.jpeg';
import createBalloons from '../../utils/balloonUtils';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;
  position: relative;
  text-align: center;
  color: #333;
  font-family: Arial, sans-serif;
`;

const profilePicStyle = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid #1abc9c;
  margin-bottom: 20px;
`;

const headingStyle = css`
  font-size: 4em;
  font-weight: 700;
  color: #1abc9c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
  z-index: 1;
`;

const balloonContainerStyle = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const ComingSoon = () => {
  const balloons = createBalloons(12);

  return (
    <div css={containerStyle}>
      <img src={profilePic} alt="Profile" css={profilePicStyle} />
      <h1 css={headingStyle}>Coming Soon!</h1>
      <div css={balloonContainerStyle}>
        {balloons.map(({ id, img, ...style }) => (
          <Balloon key={id} img={img} style={style} />
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
