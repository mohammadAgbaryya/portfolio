import { generateUniqueId } from '.';
import balloonsImg1 from '../../imgs/balloons.png';
import balloonsImg2 from '../../imgs/balloons2.png';

const BALLOON_IMAGES = [balloonsImg1, balloonsImg2];

const createBalloons = (length = 12) => {
  return Array.from({ length }, () => ({
    id: generateUniqueId(),
    img: BALLOON_IMAGES[Math.floor(Math.random() * BALLOON_IMAGES.length)],
    width: `${Math.random() * 100 + 80}px`,
    height: `${Math.random() * 130 + 100}px`,
    animationDuration: `${Math.random() * 5 + 5}s`,
    left: `${Math.random() * 100}%`,
  }));
};

export default createBalloons;
