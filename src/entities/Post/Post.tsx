import { FC, useState } from 'react';
import styles from './Post.module.scss';
import { UserIcon } from 'shared/icons';
import { Commentary } from './ui/Commentary';

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
        <button className={styles.comments} onClick={() => setCommentsShow(!commentsShow)}>
          Комментарии
        </button>
      </div>

      {commentsShow && <Commentary userId={userId} text={text} />}
    </div>
  );
};
