import { User } from 'entities/index';
import { FC } from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo: FC = () => {
  return (
    <div className={styles.container}>
      <User />
    </div>
  );
};
