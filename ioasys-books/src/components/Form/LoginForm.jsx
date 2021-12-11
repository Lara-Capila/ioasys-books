import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import LoginSchema from './validationSchema';
import * as Styled from './styles';

export default function LoginForm() {
  return (
    <Styled.Container>
      <Formik
        initialValues={{ email: '', senha: '' }}
        validationSchema={LoginSchema}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" />

          <label htmlFor="senha">Senha</label>
          <Field name="senha" type="password" placeholder="Email" />
          <ErrorMessage name="email" />
        </Form>
      </Formik>
    </Styled.Container>
  );
}
