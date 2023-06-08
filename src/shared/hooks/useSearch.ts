import { useAppDispatch } from 'app/redux/hooks';
import { setSearchValue } from 'app/redux/slices';

import { useGetPostsParams } from './useGetPostsParams';

export const useSearch = () => {
  const { userId, searchValue, totalPages, sortBy } = useGetPostsParams();

  const dispatch = useAppDispatch();

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
  };

  return { searchValue, onChangeSearchValue };
};
