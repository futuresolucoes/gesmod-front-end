import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import HeaderMenuToogle from '~/components/HeaderMenuToogle';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} width={78} alt="Gesmod" />
          </Link>
        </nav>
        <aside>
          <Profile>
            <strong>{`${profile.first_name} ${profile.last_name}`}</strong>
            <div>
              <HeaderMenuToogle />
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
