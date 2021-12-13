import React from 'react';

import Container from './styles';

function Error() {
  return (
    <Container type="error" message="Usuário e/ou senha incorretos" showIcon />
  );
}

export default Error;
