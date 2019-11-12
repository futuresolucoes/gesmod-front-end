import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import { store } from '~/store';

export default function Header() {
  const dispatch = useDispatch();

  const name = store.getState().user.profile.first_name;

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Gesmod" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">Meus dados</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
