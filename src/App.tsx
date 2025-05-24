import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sustainability from './pages/commitment/Sustainability';
import Safety from './pages/commitment/Safety';
import Quality from './pages/commitment/Quality';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="commitment">
            <Route path="sustainability" element={<Sustainability />} />
            <Route path="safety" element={<Safety />} />
            <Route path="quality" element={<Quality />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;