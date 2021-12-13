import React from 'react';
import Proptypes from 'prop-types';

import ButtonContainer from './styles';

export default function ButtonSend({ disabled, loading }) {
  return (
    <ButtonContainer
      type="primary"
      htmlType="submit"
      className="login-form-button"
      disabled={disabled}
      loading={loading}
    >
      Entrar
    </ButtonContainer>
  );
}

ButtonSend.propTypes = {
  disabled: Proptypes.bool.isRequired,
  loading: Proptypes.bool.isRequired,
};
