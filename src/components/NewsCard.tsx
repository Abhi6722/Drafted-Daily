import React from 'react';
import { Share2 } from 'lucide-react';

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
  // Split by paragraphs (double newline)
  const paragraphs = excerpt.split('\n\n');
  const firstParagraph = paragraphs[0];
  const remainingParagraphs = paragraphs.slice(1).join('\n\n');

  return (
    <article className="space-y-3">
      {/* Title and Meta Section */}
      <div className="space-y-2">
        <h2 className={`font-serif ${large ? 'text-2xl' : 'text-xl'} font-bold leading-tight text-foreground`}>
          {title}
        </h2>
        
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-text-secondary">{category}</span>
              <span className="text-text-accent">&#9670;</span>
              <span className="text-text-secondary whitespace-nowrap">{author}</span>
              <span className="text-text-accent">&#9670;</span>
              <span className="text-text-secondary">{date}</span>
            </div>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      <hr className="border-t border-text-primary mb-2" />

      {/* First paragraph */}
      <div className="text-muted-foreground text-justify">
        <p className="text-sm leading-5">
          {firstParagraph}
        </p>
      </div>

      {/* Image */}
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-[150px] object-cover"
        />
      )}

      {/* Remaining paragraphs */}
      {remainingParagraphs && (
        <div className="text-muted-foreground text-justify">
          <p className="text-sm leading-5">
            {remainingParagraphs}
          </p>
        </div>
      )}
    </article>
  );
};

export default NewsCard;