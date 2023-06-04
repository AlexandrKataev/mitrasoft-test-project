import { instance } from '../config/axios';

import { IUser } from 'shared/models/IUser';

export const userService = {
  getUser: async (userId: string) => {
    const response = await instance.get<IUser[]>(`/users/${userId}`);
    return response.data;
  },
};
