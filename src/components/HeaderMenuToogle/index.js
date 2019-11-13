import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';

import { Container, Badge, OptionsList, Option } from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function HeaderMenuToogle() {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <FaUserAlt size={30} color="#78378d" />
      </Badge>

      <OptionsList visible={visible}>
        <Option to="/profile">Meu perfil</Option>

        <button type="button" onClick={handleSignOut}>
          Sair
        </button>
      </OptionsList>
    </Container>
  );
}
