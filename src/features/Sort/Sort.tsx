import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { selectCurrentPage, selectTotalPages } from 'app/redux/slices/paginationSlice';
import { selectSearchValue } from 'app/redux/slices/searchSlice';
import { selectSortBy, setSortBy } from 'app/redux/slices/sortSlice';

import { Dropdown } from 'react-bootstrap';

export const Sort = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(selectSortBy);
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);
  const searchValue = useAppSelector(selectSearchValue);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Сортировка
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            onClick={() =>
              dispatch(setSortBy({ currentPage, totalPages, searchValue, sortBy: '' }))
            }
            active={sortBy === ''}>
            Нет
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() =>
              dispatch(setSortBy({ currentPage, totalPages, searchValue, sortBy: 'title' }))
            }
            active={sortBy === 'title'}>
            По алфавиту
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
