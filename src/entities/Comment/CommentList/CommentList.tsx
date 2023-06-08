import React, { FC, useEffect } from 'react';
import { commentService } from 'shared/api/services';
import { IComment } from 'shared/models';
import { CommentRow } from '../CommentRow';
import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { getCommentsFetch, selectComments } from 'app/redux/slices/commentSlice';

interface ICommentListProps {
  commentsArray: IComment[];
  setCommentsArray: React.Dispatch<React.SetStateAction<IComment[]>>;
  id: string;
}

export const CommentList: FC<ICommentListProps> = ({ setCommentsArray, id }) => {
  // useEffect(() => {
  //   commentService.getPostComments(id).then((data) => setCommentsArray(data));
  // }, [setCommentsArray]);
  const dispatch = useAppDispatch();
  const commentsArray = useAppSelector(selectComments);

  useEffect(() => {
    dispatch(getCommentsFetch(id));
  }, []);

  useEffect(() => {
    console.log(commentsArray.comments[`${id}`]);
  }, [commentsArray.comments]);

  return (
    <div>
      {(commentsArray.comments[`${id}`] || []).map((comment) => (
        <CommentRow {...comment} key={comment.id} />
      ))}
    </div>
  );
};
