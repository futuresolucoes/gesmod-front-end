import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const OptionsList = styled.div`
  position: absolute;
  width: 200px;
  left: -145px;
  top: calc(100% + 30px);
  background: rgba(4, 4, 4, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(80% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }

  button {
    margin-right: 20px;
    margin-top: 20px;
    background: none;
    color: #fff;
    border: 0;
    transition: color 0.3s;

    &:hover {
      color: ${darken(0.02, 'red')};
    }
  }
`;

export const Option = styled(Link)`
  display: block;
  margin-top: 3px;
  margin-right: 20px;
  margin-bottom: 10px;
  transition: color 0.3s;
  font-size: 16px;
  color: #fff;

  &:hover {
    color: ${darken(0.06, '#c6d200')};
  }
`;
