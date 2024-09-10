import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rings from './components/pages/Rings';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/ring-portfolio/' exact Component={Rings}/>
        <Route path='/ring-portfolio/about' exact Component={About}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
