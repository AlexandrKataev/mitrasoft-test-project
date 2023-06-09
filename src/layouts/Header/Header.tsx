import { useState } from 'react';
import { Navbar, Nav, Container, Image, Col, Button } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';

import myPhoto from 'shared/images/myPhoto.png';

export const Header = () => {
  const currentPage = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <Navbar expand="lg" expanded={isOpened}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpened(!isOpened)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink to="/">
              <Button
                variant={currentPage.pathname === '/' ? 'primary' : 'outline-primary'}
                className="me-2 mt-2"
                onClick={() => setIsOpened(false)}>
                Список постов
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button
                variant={currentPage.pathname === '/about' ? 'primary' : 'outline-primary'}
                className="me-2 my-2"
                onClick={() => setIsOpened(false)}>
                Обо мне
              </Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        <Col className="fs-6 text-end me-3">
          <Link to="/about">
            <div className="fs-6 fw-bold text-dark">Катаев Александр</div>
            <div className="text-dark">dkeyman@mail.ru</div>
          </Link>
        </Col>
        <Link to="/about">
          <Image src={myPhoto} width="60px" roundedCircle />
        </Link>
      </Container>
    </Navbar>
  );
};
