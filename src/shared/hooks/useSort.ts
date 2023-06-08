import { useAppDispatch } from 'app/redux/hooks';
import { setSortBy } from 'app/redux/slices';

import { useGetPostsParams } from './useGetPostsParams';

export const useSort = () => {
  const { userId, searchValue, totalPages, sortBy, currentPage } = useGetPostsParams();

  const dispatch = useAppDispatch();

  const onChangeSortBy = () => {
    dispatch(setSortBy({ currentPage, searchValue, sortBy, totalPages, userId }));
  };

  return { sortBy, onChangeSortBy };
};
