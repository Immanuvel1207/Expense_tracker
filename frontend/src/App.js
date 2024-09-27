// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
  <>
    <Header/>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
    <Footer/>
  </>
  );
};

export default App;
