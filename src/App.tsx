// import {Profiler, useState} from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import About from './pages/About.tsx';
import FunStuff from './pages/FunStuff.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fun" element={<FunStuff />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App