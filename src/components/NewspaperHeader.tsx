import React from 'react';
import styled from 'styled-components';
import { Sun } from 'lucide-react';

const HeaderContainer = styled.header`
  padding: 2rem 1rem;
  border-bottom: 2px solid var(--border-color);
`;

const Masthead = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const NewspaperTitle = styled.h1`
  font-family: 'UnifrakturMaguntia', serif;
  font-size: 4rem;
  margin-bottom: 0.5rem;
`;

const DateLine = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'Times New Roman', serif;
  font-size: 1.125rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const WeatherWidget = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

const NewspaperHeader: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <HeaderContainer>
      <WeatherWidget>
        <Sun size={16} />
        <span>72°F</span>
      </WeatherWidget>
      
      <Masthead>
        <NewspaperTitle>The Daily Chronicle</NewspaperTitle>
        <DateLine>
          {currentDate} • Vol. CXLIV No. 41,235
        </DateLine>
      </Masthead>

      <Navigation>
        <NavLink href="#news">News</NavLink>
        <NavLink href="#opinion">Opinion</NavLink>
        <NavLink href="#sports">Sports</NavLink>
        <NavLink href="#arts">Arts</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default NewspaperHeader;