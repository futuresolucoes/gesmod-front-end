import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  header {
    height: 100px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 40px;

    strong {
      font-size: 32px;
      color: #fff;
    }

    > a {
      background: #f94d6a;
      width: 172px;
      height: 42px;
      text-align: center;
      line-height: 42px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 4px;
      text-decoration: none;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    color: #fff;

    > a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
