import React from 'react';
import styled from 'styled-components';
import { Article } from '../types/article';
import { Calendar } from 'lucide-react';

const DetailContainer = styled.article`
  width: 100%;
`;

const ArticleContent = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const Title = styled.h1`
  font-family: 'Times New Roman', serif;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  font-size: 14px;
  color: var(--text-secondary);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const RelatedArticles = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`;

const RelatedTitle = styled.h3`
  font-family: 'Times New Roman', serif;
  font-size: 24px;
  margin-bottom: 1rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <DetailContainer>
      {article.image && (
        <HeaderImage
          src={article.image.src}
          alt={article.image.alt}
        />
      )}
      
      <ArticleContent>
        <Title>{article.title}</Title>
        {article.subtitle && <Subtitle>{article.subtitle}</Subtitle>}
        
        <MetaInfo>
          <MetaItem>
            <Calendar size={16} />
            {formatDate(article.publishedAt)}
          </MetaItem>
          <MetaItem>By {article.author}</MetaItem>
        </MetaInfo>
        
        <Content>
          {article.fullContent?.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Content>
        
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <RelatedArticles>
            <RelatedTitle>Related Articles</RelatedTitle>
            <RelatedGrid>
              {article.relatedArticles.map(related => (
                <div key={related.id}>
                  {/* Related article preview component would go here */}
                </div>
              ))}
            </RelatedGrid>
          </RelatedArticles>
        )}
      </ArticleContent>
    </DetailContainer>
  );
};

export default ArticleDetail;