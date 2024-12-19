import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import More from './components/More';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/more" element={<More />} />
            {/* Add a default route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
