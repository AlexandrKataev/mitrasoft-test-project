import { FC } from 'react';

import { IUser } from 'shared/models/IUser';

import { Col, Container, Row, Image, Stack } from 'react-bootstrap';

export const UserCard: FC<IUser> = (props) => {
  return (
    <Container className="bg-white p-4 border rounded-3 ">
      <Row xs={1} sm={1} md={2} className="d-flex justify-content-center ">
        <Col className="col-md-4">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf56a020234087.562e7e854f620.jpg"
            width="200px"
            roundedCircle
          />
        </Col>
        <Col>
          <Stack>
            <h3 className="p-1">{props.name}</h3>
            <div>
              <span className="p-1 opacity-50">город:</span>
              <span className="p-1">{props.address.city}</span>
            </div>
            <div>
              <span className="p-1 opacity-50">Адрес:</span>
              <span className="p-1">{`${props.address.street}, ${props.address.suite}`}</span>
            </div>
            <div>
              <span className="p-1 opacity-50">Место работы:</span>
              <span className="p-1">{props.company.name}</span>
            </div>

            <div>
              <span className="p-1 opacity-50">тел:</span>
              <span className="p-1">{props.phone}</span>
            </div>
            <div>
              <span className="p-1 opacity-50">email:</span>
              <span className="p-1">{props.email}</span>
            </div>

            <div>
              <span className="p-1 opacity-50">сайт:</span>
              <span className="p-1">{props.website}</span>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
