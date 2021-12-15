import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Styled from './style';

function Title() {
  const history = useHistory();
  const path = history.location.pathname;
  return (
    <Styled.HeaderContainer>
      <Styled.LogoContainer path={path} />
      <Styled.Subtitle path={path}>Books</Styled.Subtitle>
    </Styled.HeaderContainer>
  );
}

export default Title;
