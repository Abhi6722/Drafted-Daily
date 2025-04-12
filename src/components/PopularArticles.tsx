const PopularArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Massive Wildfire Sweeps Across Northern California,...",
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
      title: "Hurricane Fiona Makes Landfall in Florida, Severe...",
      date: "19 Dec 2024",
      author: "Akhira Hinata"
    },
    {
      id: 4,
      title: "NASA Confirms Discovery of Earth-Like Planet in Nearby",
      date: "18 Dec 2024",
      author: "Rachel Velerossa T"
    },
    {
      id: 5,
      title: "Protests Erupt Nationwide After Several Police Incident",
      date: "16 Dec 2024",
      author: "Aaron Petterson"
    },
    {
      id: 6,
      title: "Stock Market Plummets Tech Report Quarterly Losses",
      date: "20 Dec 2024",
      author: "Manuel Pereira"
    }
  ];

  return (
    <div className="bg-background p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-serif font-medium text-foreground">Popular Article Now</h3>
        <span className="px-3 py-1 text-sm text-text-accent bg-primary/10 rounded-full border border-text-accent">20 New</span>
      </div>
      
      <hr className="border-t border-border mb-6" />
      
      <div className="space-y-8">
        {articles.map((article, index) => (
          <div key={article.id} className="flex gap-4">
            <span className="text-2xl italic font-bold text-text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="space-y-2">
              <h4 className="font-medium text-lg text-foreground leading-tight">{article.title}</h4>
              <div className="text-sm text-text-secondary">
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