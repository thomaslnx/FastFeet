import React from 'react';
import { Link } from 'react-router-dom';

import fastfeet from '../../assets/logo/fastfeet-logo.png';

import { Container, Logo, VerticalLine, Links, Login, Rotas } from './styles';

export default function Header() {
  return (
    <>
      <Container>
        <Rotas>
          <Logo src={fastfeet} />
          <VerticalLine />
          <Links>
            <Link to="#">ENCOMENDAS</Link>
          </Links>

          <Links>
            <Link to="#">ENTREGADORES</Link>
          </Links>

          <Links>
            <Link to="#">DESTINATÁRIOS</Link>
          </Links>

          <Links>
            <Link to="#">PROBLEMAS</Link>
          </Links>
        </Rotas>

        <Login>
          <div className="user">User</div>
          <div className="logout">sair do sistema</div>
        </Login>
      </Container>
    </>
  );
}
