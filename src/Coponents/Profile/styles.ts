import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -50px auto 0;
  background-color: ${({theme}) => theme.profile};
  padding: 2rem;
  border-radius: 8px;
  flex-wrap: wrap;

  img {
    border-radius: 8px;
    width: 148px;
    height: 148px;
    margin-left: 4px;
  }

  & > div {
    width: 75%;
    margin-left: 24px;
    padding: 12px;
  }

  p {
    line-height: 1.5rem;
  }
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  
  & > span {
    color: ${({theme}) => theme.white};
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    color: ${({theme}) => theme.blue};
    font-weight: 700;

    svg {
      margin-left: 8px;
    }
  }
`;

export const FooterDetails = styled.div`
  display: flex;
  margin-top: 1.5rem;
  align-items: flex-end;

  span {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.gray};
    margin-right: 1.5rem;

    svg {
      color: ${({theme}) => theme.blueLight};
      margin-right: 8px;
    }
  }  
`;