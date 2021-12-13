import React from 'react';

import { Form } from 'antd';

import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import ButtonSend from '../buttonSend';
import Error from '../Error/Error';

export default function LoginForm() {
  const history = useHistory();
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const loginSuccess = () => {
    setTimeout(() => {
      setIsLoading(false);
      // eslint-disable-next-line no-magic-numbers
    }, 2000);
    history.push('/dashboard');
  };

  console.log(setIsDisabled);

  const loginError = () => {
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      // eslint-disable-next-line no-magic-numbers
    }, 2000);
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

        <Form.Item>
          <ButtonSend disabled={isDisabled} loading={isLoading} />
        </Form.Item>
        {showAlert && <Error />}
      </Form>
    </Styled.Container>
  );
}
