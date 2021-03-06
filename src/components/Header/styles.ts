import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;

    font-size: 1rem;
    font-weight: 600;
    color: var(--shape);
    background-color: var(--blue-light);

    padding: 0 2rem;

    border: 0;
    border-radius: 0.25rem;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }
`;