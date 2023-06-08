import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import {
  selectCurrentPage,
  selectTotalPages,
  getPostsFetch,
  selectIsLoadingPosts,
  selectPostList,
} from 'app/redux/slices';

import { PostLoader, PostBody } from 'entities/index';

import { Sort, Search, PaginationBlock } from 'features';

import { useSearch, useSort } from 'shared/hooks';

interface PostListProps {
  userId: string | 'all';
}

export const PostList: FC<PostListProps> = ({ userId }) => {
  const dispatch = useAppDispatch();
  const postsArray = useAppSelector(selectPostList);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);

  const isLoading = useAppSelector(selectIsLoadingPosts);

  const { searchValue, onChangeSearchValue } = useSearch();
  const { sortBy } = useSort();

  useEffect(() => {
    dispatch(getPostsFetch({ searchValue, sortBy, currentPage, totalPages }));
  }, [dispatch]);

  return (
    <div>
      <div className="my-3 d-flex">
        <Search searchValue={searchValue} onChangeSearch={onChangeSearchValue} />
        <Sort />
      </div>

      {isLoading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => <PostLoader />)}

      {postsArray.posts.map((post) => (
        <PostBody
          title={post.title}
          body={post.body}
          userId={post.userId}
          id={post.id}
          key={post.id}
        />
      ))}
      <div className="d-flex justify-content-center">
        <PaginationBlock />
      </div>
    </div>
  );
};
