import { instance } from '../config/axios';

import { IUser } from 'shared/models/IUser';

export const userService = {
  getUser: async (userId: number) => {
    const response = await instance.get<IUser[]>(`/users/${userId}`);
    return response.data;
  },
};
