import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rings from './components/pages/Rings';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router basename='/ring-portfolio'>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Rings}/>
        <Route path='/about' exact Component={About}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
