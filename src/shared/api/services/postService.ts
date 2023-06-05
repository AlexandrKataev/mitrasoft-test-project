import { instance } from '../config/axios';

import { IPost } from 'shared/models/IPost';

export const postService = {
  getPostList: async () => {
    const response = await instance.get<IPost[]>('/posts');
    return response.data;
  },
  getUserPostList: async (userId: string) => {
    const response = await instance.get<IPost[]>(`/user/${userId}/posts`);
    return response.data;
  },
  updatePost: async (post: IPost) => {
    await instance.put(`/posts/${post.id}`, post);
  },
  createPost: async (post: IPost) => {
    await instance.post(`/posts`, post);
  },
  deletePost: async (id: number) => {
    await instance.delete(`/posts/${id}`);
  },
};
