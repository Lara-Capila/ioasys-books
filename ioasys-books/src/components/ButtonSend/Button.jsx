import React from 'react';
import Proptypes from 'prop-types';

import ButtonContainer from './styles';

export default function ButtonSend({ loading }) {
  return (
    <ButtonContainer
      type="primary"
      htmlType="submit"
      className="login-form-button"
      loading={loading}
    >
      Entrar
    </ButtonContainer>
  );
}

ButtonSend.propTypes = {
  loading: Proptypes.bool.isRequired,
};
