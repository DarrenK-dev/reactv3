import './App.css';
import { Routes, Route } from 'react-router';
import Header from './Layout/Header';
import Home from './Components/Home';


function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
   </div>
  );
}

export default App;
