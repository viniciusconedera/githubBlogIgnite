import styled from 'styled-components';
import backgroundHeader from '../../assets/header.png';

export const HeaderContainer = styled.header`
  height: 296px;
  background-image: url(${backgroundHeader});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;