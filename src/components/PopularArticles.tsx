import { useNavigate } from "react-router-dom";

const PopularArticles = () => {
  const navigate = useNavigate();
  const articles = [
    {
      id: 'massive-wildfire',
      title: "Massive Wildfire Sweeps Across Northern California,...",
      date: "20 Dec 2024",
      author: "Johan Statman"
    },
    {
      id: 'stock-market-plummets',
      title: "Stock Market Plummets Tech Report Quarterly Losses",
      date: "20 Dec 2024",
      author: "Manuel Pereira"
    },
    {
      id: 'hurricane-fiona',
      title: "Hurricane Fiona Makes Landfall in Florida, Severe...",
      date: "19 Dec 2024",
      author: "Akhira Hinata"
    },
    {
      id: 'earth-like-planet',
      title: "NASA Confirms Discovery of Earth-Like Planet in Nearby",
      date: "18 Dec 2024",
      author: "Rachel Velerossa T"
    },
    {
      id: 'protests-erupt',
      title: "Protests Erupt Nationwide After Several Police Incident",
      date: "16 Dec 2024",
      author: "Aaron Petterson"
    },
    {
      id: 'rare-picasso-painting',
      title: "Rare Picasso Painting Sells for Record-Breaking $150 Million",
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
              <h4 className="font-medium text-lg text-foreground leading-tight hover:underline cursor-pointer"
                onClick={() => navigate(`/article/${article.id}`)}
              >{article.title}</h4>
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