import React from 'react';
import styles from './Header.module.scss';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">XXX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : styles.passive
              }>
              Список постов
            </NavLink>
            <NavLink
              to="/user/me"
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : styles.passive
              }>
              Обо мне
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
