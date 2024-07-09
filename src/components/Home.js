import React from 'react';
import LayoutWithImage from './LayoutWithImage';
import myImg from '../../imgs/me_01.jpeg';

const intro =
  'Proficient and passionate senior software engineer specializing in full-stack development. With a robust background in both frontend and backend development, I possess extensive expertise in various programming languages and technologies. I have specialized in and extensively focused on the JavaScript ecosystem, particularly utilizing React and Node.js technologies. Dedicated to delivering high-quality end-to-end software solutions, I am driven by a commitment to simplicity, professionalism, and attention to detail.';

const Home = () => {
  return <LayoutWithImage photoUrls={[myImg]} text={intro} signature="Mohammad Agbaryya" />;
};

export default Home;
