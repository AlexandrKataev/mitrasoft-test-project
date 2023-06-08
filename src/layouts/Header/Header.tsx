import { Navbar, Nav, Container, Image, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import myPhoto from 'shared/images/myPhoto.png';

export const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-dark px-3 py-2 me-2 text-opacity-50 btn-primary bg-white rounded'
                  : 'text-dark px-3 py-2 me-2 rounded'
              }>
              Список постов
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-dark px-3 py-2 mx-1 text-opacity-50 btn-primary bg-white rounded'
                  : 'text-dark px-3 py-2 mx-1 rounded'
              }>
              Обо мне
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
