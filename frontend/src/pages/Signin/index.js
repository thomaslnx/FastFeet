import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, FormContainer } from './styles';
import fastfeet from '../../assets/logo/fastfeet-logo.png';

export default function Signin() {
  return (
    <>
      <Container>
        <FormContainer>
          <img src={fastfeet} alt="fastfeet-logo" />
          <Form>
            <span>SEU EMAIL</span>
            <Input name="email" type="email" placeholder="exemplo@email.com" />
            <span>SUA SENHA</span>
            <Input name="password" type="password" placeholder="************" />

            <button type="submit">Entrar no Sistema</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}
