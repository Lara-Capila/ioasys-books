import React from 'react';

import LoginForm from '../../components/Form/LoginForm';
import * as Styled from './style';

function LoginPage() {
  return (
    <Styled.Container>
      <Styled.LoginContainer>
        <Styled.HeaderContainer>
          <Styled.LogoContainer />
          <Styled.Subtitle>Books</Styled.Subtitle>
        </Styled.HeaderContainer>
        <LoginForm />
      </Styled.LoginContainer>
    </Styled.Container>
  );
}

export default LoginPage;
