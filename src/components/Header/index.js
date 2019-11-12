import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

export default function Header() {
  function handleSignOut() {}
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img
              src="https://futuresolucoes.com.br/wp-content/uploads/2018/02/logo.png"
              alt="Future Soluções"
            />
          </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Future</strong>
              <Link to="/profile">Meu perfil</Link>
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
