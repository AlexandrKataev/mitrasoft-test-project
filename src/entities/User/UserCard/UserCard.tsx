import { useEffect, useState } from 'react';

import { Col, Container, Row, Image, Stack } from 'react-bootstrap';

import { userService } from 'shared/api/services';
import { IUser } from 'shared/models/IUser';

import { getPostsFetch } from 'app/redux/slices';

import { useAppDispatch } from 'app/redux/hooks';
import { useGetPostsParams } from 'shared/hooks';

export const UserCard = () => {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  } as IUser);

  const { userId, currentPage, searchValue, sortBy, totalPages } = useGetPostsParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    userService.getUser(userId).then((data) => setUserInfo(data));
    dispatch(getPostsFetch({ searchValue, sortBy, currentPage, totalPages, userId }));
  }, [setUserInfo, userId]);

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
            <h3 className="p-1">{userInfo.name}</h3>
            <div>
              <span className="p-1 opacity-50">город:</span>
              <span className="p-1">{userInfo.address.city}</span>
            </div>
            <div>
              <span className="p-1 opacity-50">Адрес:</span>
              <span className="p-1">{`${userInfo.address.street}, ${userInfo.address.suite}`}</span>
            </div>
            <div>
              <span className="p-1 opacity-50">Место работы:</span>
              <span className="p-1">{userInfo.company.name}</span>
            </div>

            <div>
              <span className="p-1 opacity-50">тел:</span>
              <span className="p-1">{userInfo.phone}</span>
            </div>
            <div>
              <span className="p-1 opacity-50">email:</span>
              <span className="p-1">{userInfo.email}</span>
            </div>

            <div>
              <span className="p-1 opacity-50">сайт:</span>
              <span className="p-1">{userInfo.website}</span>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
