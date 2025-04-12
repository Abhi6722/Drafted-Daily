import React from 'react';
import { Sun, Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="Paperio" className="h-8" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sun className="h-4 w-4" />
              <span>24 Dec, 2024</span>
              <span className="text-xs">07:30 AM</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-foreground">
            Breaking News Portal
          </h1>
          
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-border/20 rounded-full flex items-center gap-2 hover:bg-pearl-bush/10 text-foreground transition">
              <span>Write News</span>
            </button>
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
              alt="Profile" 
              className="h-8 w-8 rounded-full ring-1 ring-border/20"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <button className="text-sm font-medium text-foreground">Newspaper</button>
            <div className="flex items-center gap-6">
              {['News', 'World', 'Business', 'Art', 'Lifestyle', 'Sport', 'Opinion', 'Culture', 'Politic', 'Advertisement', 'Job Portal'].map((item) => (
                <Link 
                  key={item}
                  to="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <Search className="h-5 w-5 text-foreground" />
        </nav>
      </div>
    </header>
  );
};

export default Header;