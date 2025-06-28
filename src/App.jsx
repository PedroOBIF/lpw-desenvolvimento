import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Historia from './pages/Historia';
import Equipe from './pages/Equipe';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/equipe" element={<Equipe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;