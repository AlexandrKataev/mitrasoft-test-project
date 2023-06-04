import { instance } from '../config/axios';

import { IComment } from 'shared/models/IComment';

export const commentService = {
  getPostComments: async (id: string) => {
    const response = await instance.get<IComment[]>(`/posts/${id}/comments`);
    return response.data;
  },
};
