import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { selectCurrentPage, selectTotalPages } from 'app/redux/slices/paginationSlice';
import { getPostsFetch, selectIsLoadingPosts, selectPostList } from 'app/redux/slices/postSlice';
import { selectSortBy } from 'app/redux/slices/sortSlice';
import { PostBody } from 'entities/index';
import { Sort, Search, PaginationBlock } from 'features';

import { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useSearch } from 'shared/hooks/useSearch';
import { useSort } from 'shared/hooks/useSort';

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
  const { sortBy, onChangeSortBy } = useSort();

  useEffect(() => {
    dispatch(getPostsFetch({ searchValue, sortBy, currentPage, totalPages }));
  }, [dispatch]);

  return (
    <div>
      <div className="my-3 d-flex">
        <Search searchValue={searchValue} onChangeSearch={onChangeSearchValue} />
        <Sort />
      </div>

      {isLoading && <Spinner animation="border" />}

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
