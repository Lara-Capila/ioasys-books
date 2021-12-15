import styled from 'styled-components';
import Colors from '../../styles/colors';
import Logo from '../../assets/logo-white.png';
import LogoBlack from '../../assets/logo-black.png';

export const Subtitle = styled.label`
  color: ${({ path }) => (path === '/' ? Colors.white : Colors.textBlack)};
  font-weight: 300;
  line-height: 40px;
  font-size: 28px;
  margin-bottom: 48px;
`;

export const LogoContainer = styled.div`
  background-image: url(${({ path }) => (path === '/' ? Logo : LogoBlack)});
  width: 104px;
  height: 36px;
  margin-right: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;
