import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import NewsCard from '../components/NewsCard';
import ArticleSidebar from '../components/ArticleSidebar';

const CategoryPage = () => {
    const { category } = useParams();
    const categoryArticles = articles
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

    return (
        <main className="my-6 border-t-8 border-b-8 border-border">
            <div className="grid grid-cols-12 relative">
                {/* Main Content */}
                <div className="col-span-8 relative p-6">
                    <h1 className="text-4xl font-ibarra font-bold mb-8 capitalize">{category} News</h1>
                    <div className="grid grid-cols-2 gap-6">
                        {categoryArticles.map((article) => (
                            <div key={article.id} className="border border-border p-4">
                                <NewsCard
                                    id={article.id}
                                    category={article.category}
                                    title={article.title}
                                    author={article.author}
                                    date={new Date(article.publishedAt).toLocaleDateString('en-GB')}
                                    image={article.image?.src}
                                    excerpt={article.content.split(' ').slice(0, 90).join(' ')}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Right Divider with Triangle */}
                    <div className="absolute top-0 right-0 h-full w-px bg-border before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:border-x-[6px] before:border-b-[9px] before:border-x-transparent before:border-b-border" />
                </div>

                {/* Sidebar */}
                <ArticleSidebar />
            </div>
        </main>
    );
};

export default CategoryPage;
