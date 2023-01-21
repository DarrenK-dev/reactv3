import './App.css';
import { Routes, Route } from 'react-router';
import Header from './Layout/Header';


function App() {
  return (
   <div>
    <Header />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
   </div>
  );
}

export default App;
