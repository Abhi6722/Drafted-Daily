import { Sun, Search, Moon, Globe, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-border bg-card-background/95 backdrop-blur supports-[backdrop-filter]:bg-card-background/60 relative z-[100]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-4 py-5">
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6" />
              <span className="text-lg font-ibarra font-extrabold">Drafted Daily</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-text-secondary">
              <Sun className="h-6 w-6 text-text-primary" />
              <div className='flex flex-col'>
                <span className='text-sm text-text-primary'>24 Dec, 2024</span>
                <span className="text-xs text-text-secondary">08:25 AM</span>
              </div>
            </div>
          </div>

          <div className="w-px self-stretch bg-border relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />          
          
          <h1 className="text-6xl py-5 font-ibarra font-bold text-text-primary tracking-wider">
            Breaking News Portal
          </h1>

          <div className="w-px self-stretch bg-border relative before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />          

          <div className="flex py-5 items-center gap-4">
            <button className="px-6 py-2 bg-transparent border border-border text-text-primary rounded-full flex items-center gap-2 hover:opacity-90 transition">
              <span className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Write News
              </span>
            </button>
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
            <div className="absolute top-full left-0 mt-2 w-48 bg-card-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[101]">
              <div className="py-2">
                {['Daily News', 'Weekly Digest', 'Monthly Magazine', 'Archives'].map((item) => (
                  <Link key={item} to="#" className="block px-4 py-2 text-sm text-text-primary hover:bg-border/10 hover:text-text-accent">
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
                  to="#"
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
                  to="#"
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
            <button className="p-2 hover:bg-border/10 rounded-lg transition">
              <Search className="h-5 w-5 text-text-primary" />
            </button>
          </div>
        </nav>
    </header>
  );
};

export default Header;
