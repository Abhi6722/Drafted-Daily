import { useParams } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';
import ArticleSidebar from '../components/ArticleSidebar';
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
        <ArticleSidebar />
      </div>
    </main>
  );
};

export default ArticleDetailPage; 