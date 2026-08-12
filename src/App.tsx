import { HashRouter, Routes, Route } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import AvatarWidget from './components/AvatarWidget';
import { useLocation } from 'react-router';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AnimatedRoutes />
        <AvatarWidget />
      </HashRouter>
    </LanguageProvider>
  );
}
