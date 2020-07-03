import React from 'react';
import { FaSearch, FaPlus, FaCircle, FaEllipsisH } from 'react-icons/fa';
import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  Title,
  Content,
  SearchContainer,
  Search,
  Cadastrar,
  ParcelList,
  ParcelHeader,
  List,
} from './styles';

export default function Packages() {
  api.get('delivers');

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

          <ParcelList>
            <ParcelHeader>
              <div>ID</div>
              <div>Destinatário</div>
              <div>Entregador</div>
              <div>Cidade</div>
              <div>Estado</div>
              <div>Status</div>
              <div>Ações</div>
            </ParcelHeader>

            <List>
              <ul>
                <li className="id">#01</li>
                <li className="recipient">Ludiving van Bethoven</li>
                <li className="deliver">John Doe</li>
                <li className="city">Rio do Sul</li>
                <li className="state">Santa Catarina</li>
                <li className="status">
                  <span>
                    <FaCircle /> ENTREGUE
                  </span>
                </li>
                <li className="actions">
                  <FaEllipsisH />
                </li>
              </ul>
            </List>

            <List>
              <ul>
                <li className="id">#01</li>
                <li className="recipient">Ludiving van Bethoven</li>
                <li className="deliver">John Doe</li>
                <li className="city">Rio do Sul</li>
                <li className="state">Santa Catarina</li>
                <li className="status">
                  <span>
                    <FaCircle /> ENTREGUE
                  </span>
                </li>
                <li className="actions">
                  <FaEllipsisH />
                </li>
              </ul>
            </List>

            <List>
              <ul>
                <li className="id">#01</li>
                <li className="recipient">Ludiving van Bethoven</li>
                <li className="deliver">John Doe</li>
                <li className="city">Rio do Sul</li>
                <li className="state">Santa Catarina</li>
                <li className="status">
                  <span>
                    <FaCircle /> ENTREGUE
                  </span>
                </li>
                <li className="actions">
                  <FaEllipsisH />
                </li>
              </ul>
            </List>

            <List>
              <ul>
                <li className="id">#01</li>
                <li className="recipient">Ludiving van Bethoven</li>
                <li className="deliver">John Doe</li>
                <li className="city">Rio do Sul</li>
                <li className="state">Santa Catarina</li>
                <li className="status">
                  <span>
                    <FaCircle /> ENTREGUE
                  </span>
                </li>
                <li className="actions">
                  <FaEllipsisH />
                </li>
              </ul>
            </List>

            <List>
              <ul>
                <li className="id">#01</li>
                <li className="recipient">Ludiving van Bethoven</li>
                <li className="deliver">John Doe</li>
                <li className="city">Rio do Sul</li>
                <li className="state">Santa Catarina</li>
                <li className="status">
                  <span>
                    <FaCircle /> ENTREGUE
                  </span>
                </li>
                <li className="actions">
                  <FaEllipsisH />
                </li>
              </ul>
            </List>

            <List>
              <ul>
                <li className="id">#01</li>
                <li className="recipient">Ludiving van Bethoven</li>
                <li className="deliver">John Doe</li>
                <li className="city">Rio do Sul</li>
                <li className="state">Santa Catarina</li>
                <li className="status">
                  <span>
                    <FaCircle /> ENTREGUE
                  </span>
                </li>
                <li className="actions">
                  <FaEllipsisH />
                </li>
              </ul>
            </List>
          </ParcelList>
        </Content>
      </Container>
    </>
  );
}
