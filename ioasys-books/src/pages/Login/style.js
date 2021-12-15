import styled from 'styled-components';

import Background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background: url(${Background}) no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 115px;
`;
