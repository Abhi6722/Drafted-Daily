import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Article as ArticleType } from '../types/article';
import { Calendar } from 'lucide-react';

const ArticleContainer = styled.article`
  margin-bottom: 2rem;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ArticleTitle = styled.h2<{ priority: 'main' | 'secondary' | 'tertiary' }>`
  font-family: 'Times New Roman', serif;
  margin-bottom: 0.5rem;
  
  ${props => {
    switch (props.priority) {
      case 'main':
        return 'font-size: 48px; line-height: 56px;';
      case 'secondary':
        return 'font-size: 32px; line-height: 40px;';
      case 'tertiary':
        return 'font-size: 24px; line-height: 32px;';
    }
  }}
`;

const ArticleSubtitle = styled.h3`
  font-size: 18px;
  line-height: 1.4;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  transition: opacity 0.2s;
  
  ${ArticleContainer}:hover & {
    opacity: 0.9;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 12px;
  line-height: 1.2;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ArticleContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }
`;

const Category = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  color: var(--text-secondary);
`;

const Article: React.FC<ArticleType> = ({
  id,
  title,
  subtitle,
  author,
  content,
  image,
  category,
  priority = 'tertiary',
  publishedAt,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <ArticleContainer>
      <ArticleLink to={`/article/${id}`}>
        {image && (
          <ArticleImage
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        )}
        <Category>{category}</Category>
        <ArticleTitle priority={priority}>{title}</ArticleTitle>
        {subtitle && <ArticleSubtitle>{subtitle}</ArticleSubtitle>}
        <ArticleMeta>
          <MetaItem>
            <Calendar size={14} />
            {formatDate(publishedAt)}
          </MetaItem>
          <MetaItem>By {author}</MetaItem>
        </ArticleMeta>
        <ArticleContent>
          <p>{content}</p>
        </ArticleContent>
      </ArticleLink>
    </ArticleContainer>
  );
};

export default Article;