import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('E-mail é obrigatório.'),
  password: Yup.string().required('Senha é obrigatória.'),
});

export default function SignIn() {
  function handleSubmit({ email, password }) {
    console.tron.log({ 'handleSubmit-SignIn': email, password });
  }
  return (
    <>
      <img src={logo} width={250} alt="Gesmod" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
