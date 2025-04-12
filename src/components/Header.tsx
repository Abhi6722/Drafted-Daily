import { Sun, Search, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-border bg-card-background/95 backdrop-blur supports-[backdrop-filter]:bg-card-background/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="Paperio" className="h-8" />
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Sun className="h-4 w-4" />
              <span>24 Dec, 2024</span>
              <span className="text-xs">07:30 AM</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-ibarra font-bold text-text-primary">
            Breaking News Portal
          </h1>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-button-primary text-button-primary-text rounded-full flex items-center gap-2 hover:opacity-90 transition">
              <span>Write News</span>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-button-secondary text-button-secondary-text hover:opacity-90 transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
              alt="Profile" 
              className="h-8 w-8 rounded-full ring-1 ring-border"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <button className="text-sm font-medium text-text-primary">Newspaper</button>
            <div className="flex items-center gap-6">
              {['News', 'World', 'Business', 'Art', 'Lifestyle', 'Sport', 'Opinion', 'Culture', 'Politic', 'Advertisement', 'Job Portal'].map((item) => (
                <Link 
                  key={item}
                  to="#"
                  className="text-sm font-medium text-text-secondary hover:text-text-primary transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <Search className="h-5 w-5 text-text-primary" />
        </nav>
      </div>
    </header>
  );
};

export default Header;