import React from 'react';
import { Container, FormContainer, Form } from './styles';
import fastfeet from '../../assets/logo/fastfeet-logo.png';

export default function Signin() {
  return (
    <>
      <Container>
        <FormContainer>
          <img src={fastfeet} alt="fastfeet-logo" />
          <Form>
            <span>SEU EMAIL</span>
            <input type="email" placeholder="exemplo@email.com" />
            <span>SUA SENHA</span>
            <input type="password" placeholder="************" />

            <button type="submit">Entrar no Sistema</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
}
