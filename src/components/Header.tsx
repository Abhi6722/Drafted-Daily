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
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Paperio" className="h-6" />
              <span className="text-lg font-medium">Paperio</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <Sun className="h-4 w-4" />
              <span>24 Dec, 2024</span>
              <span className="text-xs">08:25 AM</span>
            </div>
          </div>

          <h1 className="text-4xl font-ibarra font-bold text-text-primary tracking-wider">
            Breaking News Portal
          </h1>

          <div className="flex items-center gap-4">
            <button className="px-6 py-2 bg-button-primary text-button-primary-text rounded-full flex items-center gap-2 hover:opacity-90 transition">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Write News
              </span>
            </button>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
              alt="Profile" 
              className="h-8 w-8 rounded-full ring-1 ring-border"
            />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-button-secondary text-button-secondary-text hover:opacity-90 transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <span>Newspaper</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="flex items-center gap-6">
              {[
                'News',
                'World',
                'Business',
                'Art',
                'Lifestyle',
                'Sport',
                'Opinion',
                'Culture',
                'Politic',
                'Advertisment',
                'Job Portal',
              ].map((item) => (
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
