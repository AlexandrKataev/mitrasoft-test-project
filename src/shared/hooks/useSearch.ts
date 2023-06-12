import { useAppDispatch } from 'app/redux/hooks';
import { setSearchValue } from 'app/redux/slices';

import { useGetPostsParams } from './useGetPostsParams';
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useSearch = () => {
  const { userId, searchValue, totalPages, sortBy } = useGetPostsParams();

  let [searchParams, setSearchParams] = useSearchParams({
    title_like: '111',
    _sort: 'title',
    _page: '2',
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(searchParams.toString());
  }, [searchParams]);

  const onChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(
      setSearchValue({
        searchValue: event.target.value,
        currentPage: 1,
        sortBy,
        totalPages,
        userId,
      }),
    );
    setSearchParams({ title_like: event.target.value, _sort: 'title', _page: '2' });
  };

  return { searchValue, onChangeSearchValue };
};
