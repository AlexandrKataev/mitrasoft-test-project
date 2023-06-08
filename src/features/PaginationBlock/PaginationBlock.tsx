import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import {
  selectCurrentPage,
  selectSearchValue,
  selectSortBy,
  selectTotalPages,
  setCurrentPage,
} from 'app/redux/slices';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

export const PaginationBlock = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(selectCurrentPage);
  const totalPages = useAppSelector(selectTotalPages);
  const searchValue = useAppSelector(selectSearchValue);
  const sortBy = useAppSelector(selectSortBy);

  const [items, setItems] = useState([0]);

  useEffect(() => {
    setItems(Array.from({ length: totalPages }, (_, i) => i + 1));
  }, [totalPages]);

  return (
    <div className="pb-5">
      <Pagination>
        {items.map((el) => {
          return (
            <Pagination.Item
              key={el}
              active={el === +currentPage}
              onClick={() => {
                dispatch(setCurrentPage({ currentPage: el, totalPages, searchValue, sortBy }));
                window.scrollTo(0, 0);
              }}>
              {el}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};
