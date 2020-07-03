import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import fastfeet from '../../assets/logo/fastfeet-logo.png';

import { Container, Logo, VerticalLine, Links, Login, Rotas } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.profile);

  console.tron.log(user);

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <div className="user">{user.email}</div>
          <button type="button" className="logout" onClick={handleSignOut}>
            sair do sistema
          </button>
        </Login>
      </Container>
    </>
  );
}
