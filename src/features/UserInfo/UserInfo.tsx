import { FC, useEffect, useState } from 'react';

import { UserCard } from 'entities/User/UserCard';
import { userService } from 'shared/api/services';
import { IUser } from 'shared/models';
import { useParams } from 'react-router-dom';

interface UserInfoProps {
  userId: string;
}

const userInfo2 = {
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: 'Wisokyburgh',
    zipcode: '90566-7771',
    geo: {
      lat: '-43.9509',
      lng: '-34.4618',
    },
  },
  phone: '010-692-6593 x09125',
  website: 'anastasia.net',
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
};

export const UserInfo: FC<UserInfoProps> = () => {
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

  const userId = useParams() as { userId: string };

  useEffect(() => {
    userService.getUser(userId.userId).then((data) => setUserInfo(data));
  }, [setUserInfo, userId]);

  return (
    <div className="rounded-3">
      <UserCard {...userInfo} />
    </div>
  );
};
