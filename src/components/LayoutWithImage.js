import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTransition, animated } from '@react-spring/web';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  perspective: 1000px; /* Add perspective */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto; /* Allow the container to expand for content */
  }
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: right;
  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
    width: 100%; /* Ensure full width */
  }
`;

const PhotoWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  border-radius: 0 50% 50% 0;
  overflow: hidden; /* Ensure children don't overflow */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`;

const PhotoContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 0 50% 50% 0;
  border: 1px solid #b2bec3;
  transform-origin: left; /* Ensure transformation origin is from the left */
  transform: rotateY(-15deg); /* 3D rotation */
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
  transition: transform 0.5s, box-shadow 0.5s; /* Smooth transitions */

  &:hover {
    transform: rotateY(-10deg) scale(1.05); /* Slightly scale on hover */
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5); /* Increase shadow on hover */
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 300px; /* Set a fixed height for smaller screens */
    border-radius: 0;
    transform: none;
    &:hover {
      transform: none;
      box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3); /* Maintain shadow */
    }
  }
`;

const Paragraph = styled.p`
  font-size: 24px; /* Make the font size larger */
  line-height: 1.8; /* Improve readability with line height */
  margin: 0; /* Remove default margins */
  padding: 28px;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px;
  }
`;

const Signature = styled.p`
  font-size: 20px;
  text-align: right;
  line-height: 2.5;
  font-family: inherit;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LayoutWithImage = ({ photoUrls, text, signature }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photoUrls.length > 1) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % photoUrls.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [photoUrls.length]);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <LayoutContainer>
      <PhotoWrapper>
        {transitions((style, i) => (
          <PhotoContainer
            key={i}
            style={{
              ...style,
              backgroundImage: `url(${photoUrls[i]})`,
            }}
          />
        ))}
      </PhotoWrapper>
      <TextContainer>
        <Paragraph>
          {text}
          <Signature>{signature}</Signature>
        </Paragraph>
      </TextContainer>
    </LayoutContainer>
  );
};

export default LayoutWithImage;
