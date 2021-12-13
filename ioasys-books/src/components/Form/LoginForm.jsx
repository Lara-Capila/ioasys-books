import React from 'react';

import { Form } from 'antd';

import * as Styled from './styles';
import ButtonSend from '../buttonSend';

export default function LoginForm() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
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
          name="Email"
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
          <ButtonSend />
        </Form.Item>
      </Form>
    </Styled.Container>
  );
}
