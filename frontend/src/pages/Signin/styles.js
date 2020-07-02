import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #7d40e7;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #444444;
  font-weight: bold;
`;

export const FormContainer = styled.div`
  width: 360px;
  height: 425px;
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 43px;
    width: 260px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 300px;

    p {
      margin-bottom: 10px;
    }

    span {
      color: #de3b3b;
      align-self: center;
      margin-top: -5px;
    }

    input {
      margin-bottom: 15px;
      height: 45px;
      weight: 300px;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 0 15px;
      font-family: 'Roboto-Regular', sans-serif;
      font-size: 16px;
      color: #999999;

      &::placeholder {
        font-family: 'Roboto-Regular', sans-serif;
        font-size: 16px;
      }
    }

    button {
      width: 300px;
      height: 45px;
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
