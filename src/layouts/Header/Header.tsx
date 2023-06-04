import { FC } from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-dark p-2 text-opacity-50' : 'text-dark p-2'
              }>
              Список постов
            </NavLink>
            <NavLink
              to="/user/me"
              className={({ isActive }) =>
                isActive ? 'text-dark p-2 text-opacity-50' : 'text-dark p-2'
              }>
              Обо мне
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
