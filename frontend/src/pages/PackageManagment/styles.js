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
  max-width: 1350px;
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
