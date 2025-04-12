export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  content: string;
  fullContent?: string;
  image?: {
    src: string;
    alt: string;
  };
  category: 'news' | 'opinion' | 'sports' | 'arts';
  priority: 'main' | 'secondary' | 'tertiary';
  publishedAt: string;
  relatedArticles?: Article[];
}