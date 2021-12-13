import React from 'react';

import { Form } from 'antd';

import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import ButtonSend from '../ButtonSend/Button';
import Error from '../Error/Error';

export default function LoginForm() {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const TWO_MILL = 200;

  const loginSuccess = () => {
    setTimeout(() => {
      setIsLoading(false);
      history.push('/dashboard');
      // eslint-disable-next-line no-magic-numbers
    }, TWO_MILL);
  };

  const loginError = () => {
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      // eslint-disable-next-line no-magic-numbers
    }, TWO_MILL);
  };

  const onFinish = (values) => {
    setIsLoading(true);
    const valoresNoArray = Object.values(values);
    const validaEmail = valoresNoArray.includes('desafio@ioasys.com.br');
    const validaSenha = valoresNoArray.includes('12341234');

    console.log('aqui embaixo');
    // eslint-disable-next-line no-unused-expressions
    validaSenha === false || validaEmail === false
      ? loginError()
      : loginSuccess();
  };

  return (
    <Styled.Container>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{}}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Por favor, insira seu email.',
            },
            { type: 'email', message: 'Insira um formato válido.' },
            { whitespace: false },
          ]}
          hasFeedback
        >
          <Styled.InputField placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="senha"
          rules={[
            {
              required: true,
              message: 'Por favor, insira sua senha.',
            },
            { min: 6 },
            { max: 12 },
          ]}
          hasFeedback
        >
          <Styled.InputField type="password" placeholder="Senha" />
        </Form.Item>
        {showAlert && <Error />}

        <Form.Item>
          <ButtonSend loading={isLoading} />
        </Form.Item>
      </Form>
    </Styled.Container>
  );
}
