import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import Header from '../../components/Header';
import {
  Container,
  Title,
  Content,
  SearchContainer,
  Search,
  Cadastrar,
} from './styles';

export default function Packages() {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Title>Gerenciando Encomendas</Title>
          <SearchContainer>
            <Search>
              <FaSearch />
              <input type="text" placeholder="Buscar por encomendas" />
            </Search>
            <Cadastrar>
              <FaPlus />
              <button type="submit" value="cadastrar">
                CADASTRAR
              </button>
            </Cadastrar>
          </SearchContainer>
        </Content>
      </Container>
    </>
  );
}
