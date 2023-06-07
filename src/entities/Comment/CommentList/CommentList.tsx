import React, { FC, useEffect } from 'react';
import { commentService } from 'shared/api/services';
import { IComment } from 'shared/models';
import { CommentRow } from '../CommentRow';

interface ICommentListProps {
  commentsArray: IComment[];
  setCommentsArray: React.Dispatch<React.SetStateAction<IComment[]>>;
  id: string;
}

export const CommentList: FC<ICommentListProps> = ({ commentsArray, setCommentsArray, id }) => {
  useEffect(() => {
    commentService.getPostComments(id).then((data) => setCommentsArray(data));
  }, [setCommentsArray]);
  return (
    <div>
      {commentsArray.map((comment) => (
        <CommentRow {...comment} key={comment.id} />
      ))}
    </div>
  );
};
