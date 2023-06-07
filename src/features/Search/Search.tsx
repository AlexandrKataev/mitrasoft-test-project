import React, { ChangeEvent, FC, useState } from 'react';
import { Form } from 'react-bootstrap';

interface SearchProps {
  searchValue: string;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({ searchValue, onChangeSearch }) => {
  return (
    <>
      <Form.Control
        value={searchValue}
        onChange={onChangeSearch}
        type="search"
        id="search"
        placeholder="Поиск"
        size="sm"
        className="me-2"
      />
    </>
  );
};
