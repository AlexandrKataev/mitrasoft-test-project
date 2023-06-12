import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { getPostsFetch, selectIsLoadingPosts, selectPostList } from 'app/redux/slices';

import { PostLoader, PostBody } from 'entities/index';

import { Sort, Search, PaginationBlock } from 'features';

import { useGetPostsParams, useSearch } from 'shared/hooks';

export const PostList = () => {
  const dispatch = useAppDispatch();
  const postsArray = useAppSelector(selectPostList);

  const isLoading = useAppSelector(selectIsLoadingPosts);

  const { searchValue, currentPage, totalPages, userId, sortBy } = useGetPostsParams();

  const { onChangeSearchValue } = useSearch();

  useEffect(() => {
    dispatch(getPostsFetch({ searchValue, sortBy, currentPage, totalPages, userId }));
  }, []);

  return (
    <div>
      <div className="my-3 d-flex">
        <Search searchValue={searchValue} onChangeSearch={onChangeSearchValue} />
        <Sort />
      </div>

      {isLoading && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((post) => <PostLoader key={post} />)}

      {!isLoading && postsArray.length === 0 && (
        <h2 className="text-center mt-5 text-black-50">Посты не найдены</h2>
      )}

      {postsArray.map((post) => (
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
