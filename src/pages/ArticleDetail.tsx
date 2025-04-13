import { useParams } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';
import PopularArticles from '../components/PopularArticles';
import { articles } from '../data/articles';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Article not found</h1>
      </div>
    );
  }

  return (
    <main className="my-6 border-t-8 border-b-8 border-border">
      <div className="grid grid-cols-12 relative">
        {/* Main Content */}
        <div className="col-span-8 relative p-6">
          <ArticleDetail article={article} />
          {/* Right Divider with Triangle */}
          <div className="absolute top-0 right-0 h-full w-px bg-border before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />
        </div>

        {/* Sidebar */}
        <div className="col-span-4">
          <PopularArticles />
          
          {/* War News */}
          <div className="border border-border border-l-0">
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium mb-4">Fierce Battles Rage as Major Offensive Launched in Conflict Zone</h3>
              <div className="aspect-video bg-card-background mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580130775562-0ef92da028de?q=80&w=300"
                  alt="War zone"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span>War</span>
                <span className="text-text-accent">&#9670;</span>
                <span>Hannah.J</span>
                <span className="text-text-accent">&#9670;</span>
                <span>24/12/2024</span>
              </div>
            </div>
          </div>

          {/* Designer Ad */}
          <div className="border border-border border-l-0 p-6 bg-card-background">
              <h3 className="text-xl font-serif font-medium mb-4">Open For Designer Now!</h3>
              <div className="space-y-4">
                <div className="aspect-video bg-card-background mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300"
                    alt="Designer workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• For age that between 23 - 50 years old</li>
                  <li>• Have a good taste of design</li>
                  <li>• Have 2 years of experience in design</li>
                  <li>• Can stay at New York for some periode</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetailPage; 