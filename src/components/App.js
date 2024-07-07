import React from 'react';
import { Global } from '@emotion/react';
import style from '../style';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const TopBar = () => <p>Top bar</p>;
const Home = () => <p>Home Page</p>;
const About = () => <p>About Page</p>;

const App = () => {
  return (
    <>
      <Global styles={style} />
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
