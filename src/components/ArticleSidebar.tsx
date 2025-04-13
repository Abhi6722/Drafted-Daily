import { useState, useEffect } from 'react';
import PopularArticles from './PopularArticles';
import { articles } from '../data/articles';

const ArticleSidebar = () => {
    const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentArticleIndex((prevIndex) => 
                prevIndex === articles.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const currentArticle = articles[currentArticleIndex];

    return (
        <div className="col-span-4">
            <PopularArticles />
            
            {/* Rotating News */}
            <div className="border border-border border-l-0">
                <div className="p-6">
                    <h3 className="text-2xl font-serif font-medium mb-4 truncate" title={currentArticle.title}>
                        {currentArticle.title.length > 120 
                            ? `${currentArticle.title.substring(0, 120)}...` 
                            : currentArticle.title}
                    </h3>
                    <div className="aspect-video bg-card-background mb-4">
                        <img 
                            src={currentArticle.image?.src}
                            alt={currentArticle.image?.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <span>{currentArticle.category}</span>
                        <span className="text-text-accent">&#9670;</span>
                        <span>{currentArticle.author}</span>
                        <span className="text-text-accent">&#9670;</span>
                        <span>{new Date(currentArticle.publishedAt).toLocaleDateString('en-GB')}</span>
                    </div>
                    <p className="text-sm text-text-primary mt-4">
                        {currentArticle.content.split(' ').slice(0, 60).join(' ')}...
                    </p>
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
    );
};

export default ArticleSidebar;
