import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 64px;
  width: 100%;
  border: 1px solid #dddddd;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #ffffff;
`;

export const Rotas = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 135px;
  height: 26px;
`;

export const VerticalLine = styled.div`
  border-left: 1px solid #dddddd;
  height: 32px;
  margin: 0 30px;
`;

export const Links = styled.div`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  margin-right: 21px;
  font-size: 15px;

  a {
    text-decoration: none;
    color: #dddddd;
  }
`;

export const Login = styled.div`
  display: flex;
  height: 64px;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .user {
    color: #666666;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    font-size: 14px;
  }

  .logout {
    color: #de3b3b;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;
