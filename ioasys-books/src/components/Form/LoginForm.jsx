import React from 'react';

import { Form } from 'antd';

import { useHistory } from 'react-router-dom';
import * as Styled from './styles';
import ButtonSend from '../ButtonSend/Button';
import Error from '../Error/Error';
import authLogin from '../../services/Auth/authLogin';

export default function LoginForm() {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const TWO_MILL = 2000;
  const HTTP_OK = 200;

  const loginSuccess = (values) => {
    const response = authLogin(values);
    response.then((res) => {
      setTimeout(() => {
        if (res.status === HTTP_OK) history.push('/dashboard');
        setIsLoading(false);
      }, TWO_MILL);
    });
  };

  const loginError = () => {
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
    }, TWO_MILL);
  };

  const onFinish = (values) => {
    setIsLoading(true);
    const valoresNoArray = Object.values(values);
    const validaEmail = valoresNoArray.includes('desafio@ioasys.com.br');
    const validaSenha = valoresNoArray.includes('12341234');
    // eslint-disable-next-line no-unused-expressions
    validaSenha === false || validaEmail === false
      ? loginError()
      : loginSuccess(values);
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
          name="password"
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
