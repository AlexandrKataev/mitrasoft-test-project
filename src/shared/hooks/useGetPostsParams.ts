import { useAppSelector } from 'app/redux/hooks';
import {
  selectCurrentPage,
  selectSearchValue,
  selectSortBy,
  selectTotalPages,
} from 'app/redux/slices';

import { useParams } from 'react-router-dom';

export const useGetPostsParams = () => {
  const searchValue = useAppSelector(selectSearchValue);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);
  const sortBy = useAppSelector(selectSortBy);
  const { userId } = useParams() as { userId: string };

  return { searchValue, sortBy, currentPage, totalPages, userId };
};
