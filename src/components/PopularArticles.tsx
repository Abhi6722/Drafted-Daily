import React from 'react';

const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Massive Wildfire Sweeps Across Northern California",
      date: "20 Dec 2024",
      author: "Johan Statman"
    },
    {
      id: 2,
      title: "Stock Market Plummets Tech Report Quarterly Losses",
      date: "20 Dec 2024",
      author: "Manuel Pereira"
    },
    {
      id: 3,
      title: "Hurricane Fiona Makes Landfall in Florida",
      date: "19 Dec 2024",
      author: "Akhira Hinata"
    },
    {
      id: 4,
      title: "NASA Confirms Discovery of Earth-Like Planet",
      date: "18 Dec 2024",
      author: "Rachel Velkerossa"
    },
    {
      id: 5,
      title: "Protests Erupt Nationwide After Several Police Incident",
      date: "16 Dec 2024",
      author: "Aaron Patterson"
    }
  ];

  return (
    <div className="bg-pearl-bush/10 backdrop-blur-sm p-6 rounded-lg border border-border/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">Popular Article Now</h3>
        <span className="text-sm text-primary">20 New</span>
      </div>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={article.id} className="flex gap-4">
            <span className="text-2xl font-bold text-muted-foreground">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="space-y-2">
              <h4 className="font-medium leading-tight text-foreground">{article.title}</h4>
              <div className="text-sm text-muted-foreground">
                {article.date}, {article.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;