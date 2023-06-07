import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { selectCurrentPage, selectTotalPages } from 'app/redux/slices/paginationSlice';
import { selectSearchValue, setSearchValue } from 'app/redux/slices/searchSlice';
import { selectSortBy, setSortBy } from 'app/redux/slices/sortSlice';

export const useSort = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  const sortBy = useAppSelector(selectSortBy);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);

  const onChangeSortBy = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(setSortBy({ currentPage, searchValue, sortBy, totalPages }));
  };

  return { sortBy, onChangeSortBy };
};
