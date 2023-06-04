import { FC } from 'react';

import { IUser } from 'shared/models/IUser';
import { UserIcon } from 'shared/icons';

export const UserCard: FC<IUser> = (props) => {
  return (
    <div className="bg-white p-4 border rounded-3">
      <div className="d-flex align-items-center">
        <UserIcon width={'60px'} />
        <h3 className="p-1">{props.name}</h3>
      </div>
      <div className="d-flex">
        <div className="p-1 opacity-50">город:</div>
        <div className="p-1">{props.address.city}</div>
      </div>
      <div className="d-flex">
        <div className="p-1 opacity-50">Адрес:</div>
        <div className="p-1">{`${props.address.street}, ${props.address.suite}`}</div>
      </div>
      <div className="d-flex">
        <div className="p-1 opacity-50">Место работы:</div>
        <div className="p-1">{props.company.name}</div>
      </div>

      <div className="d-flex">
        <div className="p-1 opacity-50">тел:</div>
        <div className="p-1">{props.phone}</div>
      </div>
      <div className="d-flex">
        <div className="p-1 opacity-50">email:</div>
        <div className="p-1">{props.email}</div>
      </div>

      <div className="d-flex">
        <div className="p-1 opacity-50">сайт:</div>
        <div className="p-1">{props.website}</div>
      </div>
    </div>
  );
};
