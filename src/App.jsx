import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import AnimalForm from './pages/AnimalForm';
import './App.css';
import logo from './assets/images/logo.png'

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
        <img src={logo} alt="Logo do aplicativo" />
        <div className="card">
          <h2>Contador</h2>
          <p>Contagem atual: {count}</p>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;