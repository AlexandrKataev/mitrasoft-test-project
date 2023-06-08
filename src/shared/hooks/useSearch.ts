import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import {
  selectTotalPages,
  selectSearchValue,
  setSearchValue,
  selectSortBy,
} from 'app/redux/slices';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

  const totalPages = useAppSelector(selectTotalPages);
  const sortBy = useAppSelector(selectSortBy);

  const onChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(
      setSearchValue({ searchValue: event.target.value, currentPage: 1, sortBy, totalPages }),
    );
  };

  return { searchValue, onChangeSearchValue };
};
