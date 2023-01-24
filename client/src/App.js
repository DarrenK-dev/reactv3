import './App.css';
import { Routes, Route } from 'react-router';
import Header from './Layout/Header';
import Home from './Components/Home';
import TestComponent from './Components/TestComponent/TestComponent';
import Dashboard from './Components/Dashboard';
import Dash4 from './Components/Dash2/Dash4'


function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/dashboard" element={<Dash4/>} />
    </Routes>
   </div>
  );
}

export default App;
