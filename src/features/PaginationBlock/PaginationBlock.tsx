import React from 'react';
import { PaginationButtonGroup } from './ui';

export const PaginationBlock = () => {
  const [tagList, setTagList] = React.useState([]);
  const [currPage, setCurrPage] = React.useState(3);

  return (
    <div>
      <PaginationButtonGroup />
    </div>
  );
};
