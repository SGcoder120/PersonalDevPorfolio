import About from './pages/About.tsx';
import Fun from './pages/Fun.tsx';
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
            <Route path="/fun" element={<Fun />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;