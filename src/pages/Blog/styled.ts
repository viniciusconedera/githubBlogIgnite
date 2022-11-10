import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15%;
`;

export const GitSearch = styled.div`
  margin: 72px 0 48px;
  
  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    span:first-child {
      font-size: 1.125rem;
      color: ${({theme}) => theme.white};
    }
    
    span:last-child {
      font-size: 0.875rem;
      color: ${({theme}) => theme.ice};
    }
  }
`;

export const InputQuery = styled.div`
  background-color: ${({theme}) => theme.inputBase};
  border: 1px solid ${({theme}) => theme.inputBorder};
  border-radius: 8px;
  
  input {
    background-color: transparent;
    border: none;
    height: 3rem;
    width: 100%;
    color: ${({theme}) => theme.white};
    font-size: 1.25rem;
    padding: 0 2rem;
    
    &:focus {
      border: 2px solid ${({theme}) => theme.inputBorder};
      border-radius: 8px;
      outline: none;
    }

    &::placeholder {
      color: ${({theme}) => theme.ice};
      font-size: 1.125rem;
    }
  }
`;

export const IssuesTable = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;