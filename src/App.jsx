import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import About from './pages/About';
import Menu from './components/Menu';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Detail/:id" element={<Detail />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
