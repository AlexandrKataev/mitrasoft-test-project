import { useAppDispatch } from 'app/redux/hooks';
import { setCurrentPage } from 'app/redux/slices';
import { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

import { useGetPostsParams } from 'shared/hooks';

export const PaginationBlock = () => {
  const { currentPage, totalPages, searchValue, sortBy, userId } = useGetPostsParams();

  const dispatch = useAppDispatch();

  const [items, setItems] = useState([0]);

  const paginationPages = () => {
    const arr = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages < 6) {
      return arr;
    } else if (totalPages >= 6 && currentPage < 6) {
      return arr.slice(0, 5);
    } else if (totalPages >= 6 && currentPage >= 6) {
      return arr.slice(Math.floor(currentPage / 6) * 6 - 1, Math.floor(currentPage / 6) * 6 + 5);
    }
  };

  useEffect(() => {
    setItems(paginationPages() || [0]);
  }, [totalPages, currentPage]);

  return (
    <div>
      {totalPages > 1 && (
        <Pagination>
          <Pagination.First
            onClick={() => {
              dispatch(setCurrentPage({ currentPage: 1, totalPages, searchValue, sortBy, userId }));
              window.scrollTo(0, 0);
            }}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => {
              currentPage - 1 > 0 &&
                dispatch(
                  setCurrentPage({
                    currentPage: currentPage - 1,
                    totalPages,
                    searchValue,
                    sortBy,
                    userId,
                  }),
                );
              window.scrollTo(0, 0);
            }}
          />

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

          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => {
              currentPage + 1 <= totalPages &&
                dispatch(
                  setCurrentPage({
                    currentPage: currentPage + 1,
                    totalPages,
                    searchValue,
                    sortBy,
                    userId,
                  }),
                );
              window.scrollTo(0, 0);
            }}
          />
          <Pagination.Last
            disabled={currentPage === totalPages}
            onClick={() => {
              dispatch(
                setCurrentPage({
                  currentPage: totalPages,
                  totalPages,
                  searchValue,
                  sortBy,
                  userId,
                }),
              );
              window.scrollTo(0, 0);
            }}
          />
        </Pagination>
      )}
    </div>
  );
};
