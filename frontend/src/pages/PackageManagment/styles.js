import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;
  align-self: center;
  width: 100%;
  max-width: 1550px;
`;

export const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: #444444;
  font-size: 24px;
  margin-top: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.div`
  svg {
    position: absolute;
    margin: 44px 0px 10px 16px;
    width: 16px;
    height: 16px;
    color: #999999;
  }

  input {
    width: 237px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    margin-top: 34px;
  }

  input::placeholder {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    color: #999999;
    text-indent: 35px;
  }
`;

export const Cadastrar = styled.div`
  svg {
    position: absolute;
    margin: 10px 0 0 10px;
    width: 16px;
    height: 16px;
    color: #ffffff;
  }

  button {
    background-color: #7d40e7;
    color: #ffffff;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 12px;
    width: 142px;
    height: 36px;
    border-radius: 4px;
    border: none;
  }
`;

export const ParcelList = styled.div``;

export const ParcelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #444444;
  margin-top: 22px;
`;

export const List = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  max-width: 1550px;
  height: 57px;
  border: none;
  border-radius: 4px;
  margin-top: 14px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1550px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: #666666;
    padding: 0 25px;
  }

  li {
    flex-basis: calc(25% - 20px);
  }

  .id {
  }

  .recipient {
    margin-left: 0px;
  }

  .deliver {
    margin-left: 100px;
    width: 400px;

    .sb-avatar {
      margin-right: 10px;
      font-family: Roboto, sans-serif;
    }
  }

  .city {
    margin-left: 75px;
  }

  .state {
    margin-left: 50px;
  }

  .status span {
    background-color: #dff0df;
    color: #2ca42b;
    font-size: 14px;
    font-weight: 700;
    width: 125px;
    height: 25px;
    border: none;
    border-radius: 12px;
    padding: 5px 15px;
    margin-left: 50px;

    svg {
      width: 10px;
      height: 10px;
    }
  }

  .actions {
    position: relative;
    left: 150px;

    .menu-button {
      border: none;
      background: transparent;

      svg {
        color: #c6c6c6;
        width: 16px;
        height: 16px;
      }
    }

    .menu {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding-left: 10px;
      border: none;
      border-radius: 4px;
      background: #FFFFFF;
      box-shadow: 0px 0px 2px #000026;
      width: 150px;
      height: 120px;

      button {
        border: none;
        background-color: transparent;
        font-family: Roboto, sans-serif;
        color: #999999;
        font-size: 16px;
      }

      button.visualizar {
        svg {
          width: 20px;
          height: 16px;
          fill: #8E5BE8;
        }
      }

      button.editar {
        svg {
          width: 15px;
          height: 15px;
          fill: #4D85EE;
        }
      }

      button.excluir {
        svg {
          width: 15px;
          height: 15px;
          fill: #DE3B3B;
        }
      }
    }
  }
`;
