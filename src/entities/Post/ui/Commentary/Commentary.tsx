import { FC } from 'react';

interface Comment {
  userId: string;
  text: string;
}

export const Commentary: FC<Comment> = ({ userId, text }) => {
  return (
    <>
      <div>
        <div>{userId}</div>
        <div>{text}</div>
      </div>
    </>
  );
};
