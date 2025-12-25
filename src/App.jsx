import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Experiments from './pages/Experiments';
import Timeline from './pages/Timeline';
import Contact from './pages/Contact';

import { AnimatePresence } from 'framer-motion';
import BootScreen from './components/BootScreen';
import CustomCursor from './components/CustomCursor';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [booting, setBooting] = React.useState(true);
  const location = useLocation();

  return (
    <HelmetProvider>
      {booting ? (
        <BootScreen onComplete={() => setBooting(false)} />
      ) : (
        <>
          <CustomCursor />
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/journey" element={<Timeline />} />
              <Route path="/b-sides" element={<Experiments />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </HelmetProvider>
  );
}

export default App;
