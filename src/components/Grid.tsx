import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: var(--grid-gap);
  padding: 1rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(200px, 1fr));
  }
  
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.article<{ span?: number }>`
  @media (min-width: 1024px) {
    grid-column: span ${props => props.span || 1};
  }
`;