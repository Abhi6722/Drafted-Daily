import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import PopularArticles from './components/PopularArticles';
import StyleGuide from './components/StyleGuide';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/" element={
            <main className="container mx-auto px-4 py-8">
              <div className="news-grid">
                <div className="main-article">
                  <NewsCard
                    category="Art"
                    title="Record-Breaking Sale: Rare Picasso Painting Fetches $150 Million at Auction"
                    author="Johan S"
                    date="24/12/2024"
                    image="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3"
                    excerpt="A never-before-seen Pablo Picasso painting has shattered records, selling for an astonishing $150 million at a Sotheby's auction in New York. The sale marks one of the highest prices ever paid for a work of art."
                    large
                  />
                  
                  <div className="mt-12">
                    <NewsCard
                      category="Catastrophic"
                      title="Catastrophic Volcanic Eruption in Indonesia Forces Mass Evacuations"
                      author="Milea Sandy E"
                      date="24/12/2024"
                      image="https://images.unsplash.com/photo-1526958097901-5e6d742d3371"
                      excerpt="A massive volcanic eruption has struck Indonesia's Mount Merapi, one of the most active volcanoes in the world, sending towering ash clouds 50,000 feet into the sky and triggering widespread evacuations."
                      large
                    />
                  </div>
                </div>
                
                <div className="side-articles space-y-8">
                  <PopularArticles />
                  
                  <NewsCard
                    category="Art"
                    title="Conservationist Discovered, Black Fox Species Thought to Have Vanished 1000 Years Ago"
                    author="Krilisica Patley"
                    date="24/12/2024"
                    excerpt="In a stunning discovery, a novel black foxes species, that was believed to have extinct over 1,000 years ago, has been found alive in a remote region of northern of Scotland."
                  />
                </div>
              </div>
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;