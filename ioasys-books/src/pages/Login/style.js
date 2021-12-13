import styled from 'styled-components';
import { Colors } from '../../globalStyles';
import Background from '../../assets/background.png';
import Logo from '../../assets/logo-white.png';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: url(${Background}) no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Subtitle = styled.label`
  color: ${Colors.white};
  font-weight: 300;
  line-height: 40px;
  font-size: 28px;
  margin-bottom: 48px;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 115px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div`
  background-image: url(${Logo});
  width: 104px;
  height: 36px;
  margin-right: 16px;
`;
