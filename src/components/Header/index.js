import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import HeaderMenuToogle from '~/components/HeaderMenuToogle';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
            <strong>Weliton Sernajotto</strong>
            <div>
              <HeaderMenuToogle />
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
