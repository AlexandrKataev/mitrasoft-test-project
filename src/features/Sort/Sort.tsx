import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import {
  selectCurrentPage,
  selectSearchValue,
  selectSortBy,
  selectTotalPages,
  setSortBy,
} from 'app/redux/slices';

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
            onClick={() =>
              dispatch(setSortBy({ currentPage, totalPages, searchValue, sortBy: '' }))
            }
            active={sortBy === ''}>
            Нет
          </Dropdown.Item>
          <Dropdown.Item
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
