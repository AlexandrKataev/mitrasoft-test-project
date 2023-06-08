import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'app/redux/hooks';
import { getCommentsFetch, selectComments, selectIsLoadingComments } from 'app/redux/slices';

import { CommentRow, CommentLoader } from 'entities/index';

interface ICommentListProps {
  id: string;
}

export const CommentList: FC<ICommentListProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoadingComments);
  const commentsArray = useAppSelector(selectComments).comments[`${id}`] || [];

  useEffect(() => {
    dispatch(getCommentsFetch(id));
  }, []);

  return (
    <div>
      {commentsArray.length === 0 && !isLoading && (
        <h4 className="text-center mt-5 text-black-50">Комментарии не найдены</h4>
      )}
      {isLoading ? (
        <CommentLoader />
      ) : (
        commentsArray.map((comment) => <CommentRow {...comment} key={comment.id} />)
      )}
    </div>
  );
};
