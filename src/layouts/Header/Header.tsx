import { useState } from 'react';
import { Navbar, Nav, Container, Image, Col, Button, Row } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';

import myPhoto from 'shared/images/myPhoto.png';

export const Header = () => {
  const currentPage = useLocation();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="bg-white">
      <Container className="container d-flex align-items-center py-2">
        <Navbar expand="sm" expanded={isOpened} className=" ms-3">
          <Row className="d-flex align-items-center">
            <Col>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={() => setIsOpened(!isOpened)}
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                  <NavLink to="/">
                    <Button
                      variant={currentPage.pathname === '/' ? 'primary' : 'outline-primary'}
                      className="me-2 mt-2"
                      onClick={() => setIsOpened(false)}>
                      Посты
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
            </Col>
          </Row>
        </Navbar>

        <div className="d-flex ms-auto align-items-center">
          <Link to="/about" className="me-3">
            <div className="fs-6 fw-bold text-dark text-end">Катаев Александр</div>
            <div className="text-dark text-end">dkeyman@mail.ru</div>
          </Link>
          <Link to="/about" className="fs-6 fw-bold me-3">
            <Image src={myPhoto} width="60px" roundedCircle />
          </Link>
        </div>
      </Container>
    </div>
  );
};
