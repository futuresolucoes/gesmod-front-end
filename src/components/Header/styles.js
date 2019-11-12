import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999999;
    }
  }

  button {
    width: 71px;
    height: 42px;
    margin-left: 10px;
    background: #d44059;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.05, '#d44059')};
    }
  }
`;
