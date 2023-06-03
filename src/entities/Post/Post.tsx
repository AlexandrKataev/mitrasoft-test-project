import { FC, useState } from 'react';
import styles from './Post.module.scss';
import { UserIcon } from 'shared/icons';
import { Commentary } from './ui/Commentary';
import { Button } from 'shared/ui';
import { ToggleButton } from 'react-bootstrap';

interface Comment {
  userId: string;
  text: string;
}

interface PostProps {
  header: string;
  text: string;
  userId: string;
  postId: string;
  comments: Comment[];
}

export const Post: FC<PostProps> = ({ header, text, userId, postId, comments }) => {
  const [commentsShow, setCommentsShow] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{header}</h2>
      <p>{text}</p>
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
            id={postId}
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
          <Commentary userId={userId} text={text} />
          <Commentary userId={userId} text={text} />
          <Commentary userId={userId} text={text} />
        </div>
      )}
    </div>
  );
};
