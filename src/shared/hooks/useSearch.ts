import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { selectSearchValue, setSearchValue } from 'app/redux/slices/searchSlice';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(selectSearchValue);

  const onChangeSearchValue = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(setSearchValue(event.target.value));
  };

  return { searchValue, onChangeSearchValue };
};
