import React, { useState, useEffect } from 'react';
import { FaSearch, FaPlus, FaCircle, FaEllipsisH, FaEye } from 'react-icons/fa';
import { MdCreate, MdDeleteForever } from 'react-icons/md';
import Avatar, { ConfigProvider } from 'react-avatar';
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
  const [parcel, setParcel] = useState([]);
  const [menu, setMenu] = useState(false);
  const [menuId, setMenuId] = useState('');

  useEffect(() => {
    async function searchApi() {
      const response = await api.get('packages');
      setParcel(response.data);
    }

    searchApi();
  }, []);

  function showMenu(e, id) {
    e.preventDefault();

    setMenuId(id);
    setMenu(!menu);
  };

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
              {
                parcel.map(item =>(
                  console.log('conteudo do estado parcel: ', item, parcel.length),
                  <List key={item.id}>
                    <ConfigProvider colors={[
                          '#F4EFFC',
                          '#A28FD0',
                          '#CB946C',
                          '#FCF4EE',
                          '#EBFBFA',
                          '#83CEC9',
                          '#FFEEF1',
                          '#CC7584',
                          '#F4F9EF',
                          '#A8D080',
                          '#FCFCEF',
                          '#CCCC8B'
                        ]}>
                      <ul className="listContainer">
                      <li className="id">#{item.id}</li>
                      <li className="recipient">{item.Recipient.name}</li>
                      <li className="deliver">
                        <Avatar name={item.Deliver.name} size="35" round={true}/>
                          {item.Deliver.name}
                      </li>
                      <li className="city">{item.Recipient.city}</li>
                      <li className="state">{item.Recipient.state}</li>
                      <li className="status">
                        <span>
                          <FaCircle /> ENTREGUE
                        </span>
                      </li>
                      <li className="actions">
                        <button className="menu-button" onClick={(e) => showMenu(e, item.id)}>
                          <FaEllipsisH />
                        </button>
                        {
                          menu === true && menuId === item.id ? (
                            <div className="menu">
                              <button className="visualizar">{item.id}<FaEye /> Visualizar</button>
                              <button className="editar"> <MdCreate />{menuId} Editar</button>
                              <button className="excluir"> <MdDeleteForever /> Excluir</button>
                            </div>
                          ) : ( null )
                        }
                      </li>
                    </ul>
                        </ConfigProvider>
                  </List>
                ))
              }
          </ParcelList>
        </Content>
      </Container>
    </>
  );
}
