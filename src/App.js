import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layouts/Layout';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Valors from './Components/Valors/Valors';
import Compare from './Components/Compare/Compare';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <Services />
            <About />
            <Valors />
          </Layout>
        }
        />
        <Route path="/compare" element={
          <Layout>
            <Compare />
          </Layout>
        }
        />
      </Routes>
    </Router>
  );
}

export default App;
