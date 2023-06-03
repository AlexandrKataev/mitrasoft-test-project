import { FC, useEffect, useState } from 'react';
import styles from './Post.module.scss';
import { UserIcon } from 'shared/icons';
import { Commentary } from './ui/Commentary';
import { Button } from 'shared/ui';
import { ToggleButton } from 'react-bootstrap';

import { IPost } from 'shared/models/IPost';
import { IUser } from 'shared/models/IUser';
import { IComment } from 'shared/models/IComment';
import { commentsService } from 'shared/api/services/commentsService';

export const Post: FC<IPost> = ({ title, body, userId, id }) => {
  const [commentsShow, setCommentsShow] = useState(false);

  const [commentsArray, setCommentsArray] = useState([] as IComment[]);
  const [usersArray, setUsersArray] = useState([] as IUser[]);

  useEffect(() => {
    commentsService.getPostComments(id).then((data) => setCommentsArray(data));
  }, [setCommentsArray]);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{title}</h2>
      <p>{body}</p>
      <div className={styles.user}>
        <UserIcon className={styles.icon} />
        <div>{userId}</div>
        {/* <button className={styles.comments} onClick={() => setCommentsShow(!commentsShow)}>
          Комментарии
        </button> */}
        {/* <Button
          id={postId}
          checked={commentsShow}
          onChange={() => setCommentsShow(!commentsShow)}
        /> */}
        <div className={styles.comments}>
          <ToggleButton
            className="mb-2"
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
            <Commentary userId={comment.email} text={comment.body} />
          ))}
        </div>
      )}
    </div>
  );
};
