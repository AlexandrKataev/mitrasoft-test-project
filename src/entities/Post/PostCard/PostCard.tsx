import { FC, useEffect, useState } from 'react';

import { Image, Row, ToggleButton } from 'react-bootstrap';

import { IPost, IComment } from 'shared/models';
import { commentService } from 'shared/api/services';

import { CommentRow } from 'entities/Comment/CommentRow';

import { Link } from 'react-router-dom';
import { CommentList } from 'entities/Comment/CommentList/CommentList';

export const PostBody: FC<IPost> = ({ title, body, userId, id }) => {
  const [commentsShow, setCommentsShow] = useState(false);

  const [commentsArray, setCommentsArray] = useState([] as IComment[]);

  return (
    <div className="mb-3 p-4 rounded-3 bg-white border">
      <div className="d-flex mb-3">
        <Link to={`/user/${userId}`}>
          <Image
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf56a020234087.562e7e854f620.jpg"
            width="64px"
            className="me-3"
            roundedCircle
          />
        </Link>
        <h2 className="mt-2">{title}</h2>
      </div>

      <p>{body}</p>
      <div>
        <div>
          <ToggleButton
            className="my-1 btn-sm"
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
        <CommentList commentsArray={commentsArray} setCommentsArray={setCommentsArray} id={id} />
      )}
    </div>
  );
};
