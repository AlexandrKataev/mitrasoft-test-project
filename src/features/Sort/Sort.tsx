import { useAppDispatch } from 'app/redux/hooks';
import { setSortBy } from 'app/redux/slices';

import { Dropdown } from 'react-bootstrap';

import { useGetPostsParams } from 'shared/hooks';

export const Sort = () => {
  const dispatch = useAppDispatch();
  const { userId, sortBy, currentPage, totalPages, searchValue } = useGetPostsParams();

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
          Сортировка
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              dispatch(setSortBy({ currentPage, totalPages, searchValue, userId, sortBy: '' }));
            }}
            active={sortBy === ''}>
            Нет
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              dispatch(
                setSortBy({ currentPage, totalPages, searchValue, userId, sortBy: 'title' }),
              );
            }}
            active={sortBy === 'title'}>
            По алфавиту
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
