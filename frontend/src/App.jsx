import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import ProjectDetail from './components/Project/ProjectDetail';

const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/project/modern-luxury-apartment-siliguri" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
