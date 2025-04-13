import { Sun, Search, Moon, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const isNightTime = () => {
    const hours = currentDateTime.getHours();
    return hours < 6 || hours >= 18; // Night time between 6 PM and 6 AM
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <header className="border-b border-border bg-card-background/95 backdrop-blur supports-[backdrop-filter]:bg-card-background/60 relative z-[100]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-4 py-5">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <Globe className="h-6 w-6" />
              <span className="text-lg font-ibarra font-extrabold">Drafted Daily</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-text-secondary">
              {isNightTime() ? 
                <Moon className="h-6 w-6 text-text-primary" /> : 
                <Sun className="h-6 w-6 text-text-primary" />
              }
              <div className='flex flex-col'>
                <span className='text-sm text-text-primary'>{formatDate(currentDateTime)}</span>
                <span className="text-xs text-text-secondary">{formatTime(currentDateTime)}</span>
              </div>
            </div>
          </div>

          <div className="w-px self-stretch bg-border relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />          
          
          <h1 className="text-6xl cursor-pointer py-5 font-ibarra font-bold text-text-primary tracking-wider"
          onClick={() => navigate('/')}
          >
            Breaking News Portal
          </h1>

          <div className="w-px self-stretch bg-border relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />          

          <div className="flex py-5 items-center gap-4">
            {/* <button className="px-6 py-2 bg-transparent border border-border text-text-primary rounded-full flex items-center gap-2 hover:opacity-90 transition">
              <span className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Write News
              </span>
            </button> */}
            <div className="px-8 py-2 bg-transparent text-text-primary rounded-full flex items-center gap-2 hover:opacity-90 transition" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-button-secondary text-button-secondary-text hover:opacity-90 transition"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* //divider */}
        <div className="h-px bg-border" />

        {/* Navigation */}
        <nav className="flex items-center justify-between px-4">
          {/* Newspaper Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm font-medium text-text-primary px-4 py-2">
              <span>Newspaper</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[101]">
              <div className="py-2">
                {['Daily News', 'Weekly Digest', 'Monthly Magazine', 'Archives'].map((item) => (
                  <Link key={item} to={`/category/${item.toLowerCase().replace(' ', '-')}`} className="block px-4 py-2 text-sm text-text-primary hover:bg-border/10 hover:text-text-accent">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider with triangle */}
          <div className="w-px self-stretch bg-border relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />

          {/* Scrollable Menu Items */}
          <div className="flex-1 px-6 overflow-x-hidden">
            <div className="flex items-center gap-10 animate-scroll hover:pause">
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
                'Advertisement',
                'Job Portal',
                'Technology',
                'Science',
                'Health',
                'Education',
                'Entertainment'
              ].map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-text-primary hover:text-text-accent whitespace-nowrap transition"
                >
                  {item}
                </Link>
              ))}
              {/* Duplicate items for seamless scrolling */}
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
                'Advertisement',
                'Job Portal',
                'Technology',
                'Science',
                'Health',
                'Education',
                'Entertainment'
              ].map((item) => (
                <Link
                  key={`${item}-duplicate`}
                  to={`/category/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-text-primary hover:text-text-accent whitespace-nowrap transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Divider with triangle */}
          <div className="w-px self-stretch bg-border relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />

          {/* Search */}
          <div className="pl-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-border/10 rounded-lg transition"
            >
              <Search className="h-5 w-5 text-text-primary" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full Screen Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-card-background/98 backdrop-blur-md z-[200] flex items-center justify-center">
          <div className="w-full max-w-2xl bg-card-background border-2 border-border shadow-2xl p-8 mx-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-ibarra font-bold text-text-primary">Search</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-border/10 rounded-full transition"
              >
                <svg className="w-6 h-6 text-text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 bg-card-background/50 border-2 border-border rounded-lg text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-text-accent transition-colors"
                autoFocus
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
