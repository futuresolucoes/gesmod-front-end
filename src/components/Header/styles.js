import styled from 'styled-components';

export const Container = styled.div`
  background: #c6d200;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 78px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  align-items: baseline;

  strong {
    font-size: 16px;
    color: #000;
    margin-right: 10px;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }
`;
