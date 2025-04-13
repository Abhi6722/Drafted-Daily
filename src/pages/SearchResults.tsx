import { useSearchParams } from 'react-router-dom';
import { articles } from '../data/articles';
import NewsCard from '../components/NewsCard';
import ArticleSidebar from '../components/ArticleSidebar';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    
    // Score articles based on relevance
    const scoredArticles = articles.map(article => {
        const titleMatch = article.title.toLowerCase().includes(query.toLowerCase());
        const contentMatch = article.content.toLowerCase().includes(query.toLowerCase());
        const categoryMatch = article.category.toLowerCase().includes(query.toLowerCase());
        
        // Calculate relevance score
        let score = 0;
        if (titleMatch) score += 3;  // Title matches are most important
        if (contentMatch) score += 2; // Content matches are second
        if (categoryMatch) score += 1; // Category matches are third
        
        return { ...article, score };
    });

    // Sort by score and get all articles with score > 0
    const exactMatches = scoredArticles
        .filter(article => article.score > 0)
        .sort((a, b) => b.score - a.score);

    // If no exact matches, get the first article as fallback
    const searchResults = exactMatches.length > 0 
        ? exactMatches 
        : [scoredArticles[0]]; // Always show at least one article

    return (
        <main className="my-6 border-t-8 border-b-8 border-border">
            <div className="grid grid-cols-12 relative">
                {/* Main Content */}
                <div className="col-span-8 relative p-6">
                    <h1 className="text-4xl font-ibarra font-bold mb-8">
                        Search Results for "{query}"
                    </h1>
                    <div className="grid grid-cols-2 gap-6">
                        {searchResults.map((article) => (
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

export default SearchResults;
