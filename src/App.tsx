import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StyleGuide from './components/StyleGuide';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-text-primary">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;