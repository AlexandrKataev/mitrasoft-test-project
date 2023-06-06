import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { selectSortBy, setSortBy } from 'app/redux/slices/sortSlice';

import { Dropdown } from 'react-bootstrap';

export const Sort = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector(selectSortBy);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Сортировка
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            onClick={() => dispatch(setSortBy('no'))}
            active={sortBy === 'no'}>
            Нет
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-2"
            onClick={() => dispatch(setSortBy('&_sort=title&_order=asc'))}
            active={sortBy === '&_sort=title&_order=asc'}>
            По алфавиту
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
