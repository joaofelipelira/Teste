import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import AnimalForm from './pages/AnimalForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<AnimalList />} />
          <Route path="/form" element={<AnimalForm />} />
        </Routes>

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
