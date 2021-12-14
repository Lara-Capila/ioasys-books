import React from 'react';

import LoginForm from '../../components/Form/LoginForm';
import Title from '../../components/Title/Title';
import * as Styled from './style';

function LoginPage() {
  return (
    <Styled.Container>
      <Styled.LoginContainer>
        <Title />
        <LoginForm />
      </Styled.LoginContainer>
    </Styled.Container>
  );
}

export default LoginPage;
