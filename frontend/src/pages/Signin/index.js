import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, FormContainer } from './styles';
import fastfeet from '../../assets/logo/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Email obrigatório'),
  password: Yup.string().required('Senha vazia'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <FormContainer>
          <img src={fastfeet} alt="fastfeet-logo" />
          <Form schema={schema} onSubmit={handleSubmit}>
            <p>SEU EMAIL</p>
            <Input name="email" type="email" placeholder="exemplo@email.com" />
            <p>SUA SENHA</p>
            <Input name="password" type="password" placeholder="************" />

            <button type="submit">Entrar no Sistema</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}
