import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
`;

export const ScreenLoading = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  margin: 0 auto;
  align-items: center;

  ${css`
    animation: ${rotate} 2s linear infinite;
  `}
`;
