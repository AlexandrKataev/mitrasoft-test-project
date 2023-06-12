import { instance } from '../config/axios';

import { IPost } from 'shared/models/IPost';

export interface getPostQueries {
  searchValue: string;
  sortBy: '' | 'title';
  currentPage: number;
  totalPages: number;
  userId: string;
}

export const postService = {
  getPostList: async ({ searchValue, sortBy, currentPage, userId }: getPostQueries) => {
    const response = await instance.get<IPost[]>(
      `/posts?title_like=${searchValue}&_sort=${sortBy}&_order=asc&_page=${currentPage}`,
    );
    return response;
  },

  getUserPostList: async ({ searchValue, sortBy, userId }: getPostQueries) => {
    const response = await instance.get<IPost[]>(
      `users/${userId}/posts?title_like=${searchValue}&_sort=${sortBy}&_order=asc&_page=${1}`,
    );
    return response;
  },
};
