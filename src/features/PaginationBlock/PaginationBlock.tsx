import { useAppDispatch } from 'app/redux/hooks';
import { setCurrentPage } from 'app/redux/slices';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

import { useGetPostsParams } from 'shared/hooks';

export const PaginationBlock = () => {
  const { currentPage, totalPages, searchValue, sortBy, userId } = useGetPostsParams();

  const dispatch = useAppDispatch();

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
                dispatch(
                  setCurrentPage({ currentPage: el, totalPages, searchValue, sortBy, userId }),
                );
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
