import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({theme}) => theme.post};
  border-radius: 8px;
  width: 420px;
  height: 260px;
  
  padding: 32px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h2 {
      color: ${({theme}) => theme.white};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 32px;
      width: 65%;
      max-height: 60px;
      overflow: hidden;
    }

    span {
      width: 30%;
    }
  }
  
  article {
    overflow: hidden;
    height: 60%;
    color: ${({theme}) => theme.ice};
  }
 
`;