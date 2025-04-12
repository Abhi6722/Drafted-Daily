import React from 'react';
import { Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image?: string;
  excerpt: string;
  large?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  title,
  author,
  date,
  image,
  excerpt,
  large = false,
}) => {
  return (
    <article className={`relative ${large ? 'space-y-6' : 'space-y-4'}`}>
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover rounded-lg ring-1 ring-border/20"
        />
      )}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary">{category}</span>
            <span>•</span>
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <Share2 className="h-4 w-4 text-muted-foreground" />
        </div>
        
        <Link to="#" className="block group">
          <h2 className={`font-serif ${large ? 'text-3xl' : 'text-xl'} font-bold leading-tight text-foreground group-hover:text-primary transition`}>
            {title}
          </h2>
        </Link>
        
        <p className="text-muted-foreground">
          {excerpt}
        </p>
      </div>
    </article>
  );
};

export default NewsCard;