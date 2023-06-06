import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { getPostsFetch, selectPostList } from 'app/redux/slices/postSlice';
import { PostBody } from 'entities/index';

import { FC, useEffect } from 'react';

interface PostListProps {
  userId: string | 'all';
}

export const PostList: FC<PostListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const postsArray = useAppSelector(selectPostList);

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [dispatch]);

  // useEffect(() => {
  //   userId === 'all'
  //     ? postService.getPostList().then((data) => dispatch(getPostsSuccess(data)))
  //     : postService.getUserPostList(userId).then((data) => dispatch(setPostList(data)));
  // }, [userId, dispatch]);

  // console.log(postsArray);

  return (
    <div>
      {postsArray.posts.map((post) => (
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
