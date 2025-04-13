import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StyleGuide from './components/StyleGuide';
import { ThemeProvider } from './context/ThemeContext';
import './styles/globals.css';
import Home from './pages/Home';
import ArticleDetailPage from './pages/ArticleDetail';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-text-primary">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            <Route path="/article/:id" element={<ArticleDetailPage />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;