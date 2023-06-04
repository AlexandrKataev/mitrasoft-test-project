import { FC, useEffect, useState } from 'react';

import { ToggleButton } from 'react-bootstrap';

import { IPost, IComment } from 'shared/models';
import { commentService } from 'shared/api/services';

import { CommentRow } from 'entities/Comment/CommentRow';
import { UserIcon } from 'shared/icons';
import { Link } from 'react-router-dom';

export const PostBody: FC<IPost> = ({ title, body, userId, id }) => {
  const [commentsShow, setCommentsShow] = useState(false);

  const [commentsArray, setCommentsArray] = useState([] as IComment[]);

  useEffect(() => {
    commentService.getPostComments(id).then((data) => setCommentsArray(data));
  }, [setCommentsArray]);

  return (
    <div className="mb-3 p-4 rounded-3 bg-white border">
      <h2>
        <Link to={`/user/${userId}`}>
          <UserIcon width="30px" />
        </Link>
        {title}
      </h2>
      <p>{body}</p>
      <div>
        <div>
          <ToggleButton
            className="mb-1 btn-sm"
            id={id}
            type="checkbox"
            variant="outline-primary"
            checked={commentsShow}
            value="1"
            onChange={(e) => setCommentsShow(e.currentTarget.checked)}>
            Комментарии
          </ToggleButton>
        </div>
      </div>

      {commentsShow && (
        <div>
          {commentsArray.map((comment) => (
            <CommentRow {...comment} />
          ))}
        </div>
      )}
    </div>
  );
};
