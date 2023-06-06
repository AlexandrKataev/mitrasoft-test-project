import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';

let active = 2;
let items = [] as any;
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

export const PaginationButtonGroup = () => {
  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};
