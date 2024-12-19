import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Project from "./pages/Projects";
import Contact from './pages/Contact';
import More from './pages/More';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './components/Theme.css';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
