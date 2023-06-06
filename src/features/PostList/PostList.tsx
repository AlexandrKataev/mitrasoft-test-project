import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { getPostsFetch, selectPostList } from 'app/redux/slices/postSlice';
import { PostBody } from 'entities/index';
import { Sort, Search, PaginationBlock } from 'features';

import { FC, useEffect, useState } from 'react';
import { useSearch } from 'shared/hooks/useSearch';

interface PostListProps {
  userId: string | 'all';
}

export const PostList: FC<PostListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const postsArray = useAppSelector(selectPostList);

  const { searchValue, onChangeSearchValue } = useSearch();

  useEffect(() => {
    dispatch(getPostsFetch(searchValue));
  }, [dispatch]);

  // useEffect(() => {
  //   userId === 'all'
  //     ? postService.getPostList().then((data) => dispatch(getPostsSuccess(data)))
  //     : postService.getUserPostList(userId).then((data) => dispatch(setPostList(data)));
  // }, [userId, dispatch]);

  // console.log(postsArray);

  return (
    <div>
      <div className="my-3 d-flex">
        <Search searchValue={searchValue} onChangeSearch={onChangeSearchValue} />
        <Sort />
      </div>
      <div>
        <PaginationBlock />
      </div>
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
