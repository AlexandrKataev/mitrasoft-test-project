import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { selectPostList, setPostList } from 'app/redux/slices/postListSlice';
import { PostBody } from 'entities/index';

import { FC, useEffect, useState } from 'react';

import { postService } from 'shared/api/services/postService';
import { IPost } from 'shared/models/IPost';

interface PostListProps {
  userId: string | 'all';
}

export const PostList: FC<PostListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();

  const postsArray = useAppSelector(selectPostList);

  useEffect(() => {
    userId === 'all'
      ? postService.getPostList().then((data) => dispatch(setPostList(data)))
      : postService.getUserPostList(userId).then((data) => dispatch(setPostList(data)));
  }, [userId]);

  return (
    <div>
      {postsArray.items.map((post) => (
        <PostBody
          title={post.title}
          body={post.body}
          userId={post.userId}
          id={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
};
