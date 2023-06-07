import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import {
  selectCurrentPage,
  selectTotalPages,
  setCurrentPage,
} from 'app/redux/slices/paginationSlice';
import { selectSearchValue, setSearchValue } from 'app/redux/slices/searchSlice';
import { selectSortBy } from 'app/redux/slices/sortSlice';
import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);
  const sortBy = useAppSelector(selectSortBy);

  const onChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSearchParams('search=' + event.target.value);
    dispatch(
      setSearchValue({ searchValue: event.target.value, currentPage: 1, sortBy, totalPages }),
    );
  };

  return { searchValue, onChangeSearchValue };
};
