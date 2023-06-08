import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { getCommentsFetch, selectComments } from 'app/redux/slices/commentSlice';

import { CommentRow, CommentLoader } from 'entities/index';

interface ICommentListProps {
  id: string;
}

export const CommentList: FC<ICommentListProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const commentsArray = useAppSelector(selectComments).comments[`${id}`] || [];

  useEffect(() => {
    dispatch(getCommentsFetch(id));
  }, []);

  return (
    <div>
      {commentsArray.length === 0 ? (
        <CommentLoader />
      ) : (
        commentsArray.map((comment) => <CommentRow {...comment} key={comment.id} />)
      )}
    </div>
  );
};
