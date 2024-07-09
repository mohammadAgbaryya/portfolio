import React from 'react';
import { Global } from '@emotion/react';
import style from '../style';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <>
      <Global styles={style} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
