import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import TBA from './pages/TBA';
import Mindfulness from './pages/Mindfulness';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tba" element={<TBA />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
      </Routes>
    </Router>
  );
}

export default App;
