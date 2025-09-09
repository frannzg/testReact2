import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Contact from './pages/Contact';
import Menu from "./components/Menu"



function App() {
  return (
    <Router>
      <div>
        {/* Menú arriba */}
        <Menu />

        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/users" element={<Users />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
