import { Navigate, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index.html" element={<Navigate to="/" replace />} />
      <Route path="/about-us.html" element={<About />} />
      <Route path="/gallery.html" element={<Gallery />} />
      <Route path="/contact-us.html" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
