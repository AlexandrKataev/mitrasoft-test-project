import { instance } from '../config/axios';

import { IUser } from 'shared/models/IUser';

export interface getUsersPostQueries {
  searchValue: string;
  sortBy: '' | 'title';
  currentPage: number;
  totalPages: number;
  userId: string;
}

export const userService = {
  getUser: async (userId: string) => {
    const response = await instance.get<IUser>(`/users/${userId}`);
    return response.data;
  },
};
