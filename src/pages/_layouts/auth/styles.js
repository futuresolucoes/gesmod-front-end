import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      color: #f64d31;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 50px;
      background: #c6d200;
      border: 0;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      color: #78378d;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.06, '#c6d200')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-weight: bold;
      font-size: 16px;
      opacity: 0.6;
      transition: opacity 0.3s;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
