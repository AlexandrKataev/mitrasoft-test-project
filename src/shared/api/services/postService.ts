import { instance } from '../config/axios';

import { IPost } from 'shared/models/IPost';

export interface getPostQueries {
  searchValue: string;
  sortBy: '' | 'title';
  currentPage: number;
  totalPages: number;
}

export const postService = {
  getPostList: async ({ searchValue, sortBy, currentPage }: getPostQueries) => {
    const response = await instance.get<IPost[]>(
      `/posts?title_like=${searchValue}&_sort=${sortBy}&_order=asc&_page=${currentPage}`,
    );
    return response;
  },
  getUserPostList: async (userId: string) => {
    const response = await instance.get<IPost[]>(`/user/${userId}/posts`);
    return response.data;
  },
};
