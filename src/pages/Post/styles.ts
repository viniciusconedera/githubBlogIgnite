import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -75px auto 0;
  
  
  & > div {
    background-color: ${({theme}) => theme.profile};
    border-radius: 8px;        
    margin-left: 24px;
    padding: 12px;
    width: 75%;
  }

  section {
    line-height: 1.5rem;
    width: 75%;
    padding-left: 32px;
    margin: 40px;    
  }
`;

export const HeaderDetails = styled.div`  
  margin-bottom: 8px;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({theme}) => theme.blue};
      font-weight: 700;
      margin-bottom: 8px;

      svg {
        margin: 0 8px;
      }
    }
  }
  
  & > span {
    color: ${({theme}) => theme.white};
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
  }  
`;

export const FooterDetails = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: flex-end;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.gray};
    margin-right: 1.5rem;

    svg {
      color: ${({theme}) => theme.blueLight};
      margin-right: 8px;
    }
  }  
`;