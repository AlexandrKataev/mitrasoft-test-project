import { FC } from 'react';
import styles from './Commentary.module.scss';
import { UserIcon } from 'shared/icons';

interface Comment {
  userId: string;
  text: string;
}

export const Commentary: FC<Comment> = ({ userId, text }) => {
  return (
    <>
      <div className={styles.container}>
        <div>{text}</div>
        <div className={styles.user}>
          <UserIcon width="14px" className={styles.icon} />
          <div>{userId}</div>
        </div>
      </div>
    </>
  );
};
