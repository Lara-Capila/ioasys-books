import styled from 'styled-components';

import { FiLogOut } from 'react-icons/fi';
import background from '../../assets/dashboard-backgrond.png';
import background2 from '../../assets/2dashboard-backgrond.png';
import Colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: url(${background}), url(${background2}), no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 42px;
  margin-bottom: 16px;
  @media (min-width: 1600px) {
    width: 1400px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
    margin-left: 8px;
  }
`;

export const BooksCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 15px;
  grid-template-rows: auto;
  row-gap: 10px;
  margin-top: 12px;
  width: 1200px;

  @media (min-width: 1600px) {
    width: 1400px;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
  color: ${Colors.textBlack};
`;

export const LogoutIcon = styled(FiLogOut)`
  color: ${Colors.textBlack};
  font-size: 20px;
  margin-left: 15px;

  cursor: pointer;
`;
