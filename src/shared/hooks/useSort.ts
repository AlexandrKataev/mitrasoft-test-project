import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import {
  selectCurrentPage,
  selectTotalPages,
  selectSearchValue,
  selectSortBy,
  setSortBy,
} from 'app/redux/slices';

export const useSort = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  const sortBy = useAppSelector(selectSortBy);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);

  const onChangeSortBy = () => {
    dispatch(setSortBy({ currentPage, searchValue, sortBy, totalPages }));
  };

  return { sortBy, onChangeSortBy };
};
