import React from 'react';

import { PostList, UserInfo } from 'features';
import { useParams } from 'react-router-dom';

export const UserPage = () => {
  const { userId } = useParams() as { userId: string };

  return (
    <div>
      <UserInfo userId={userId} />
      <h6 className="ms-4 mt-4">Посты пользователя:</h6>
      <div className="mt-3">
        <PostList userId={userId} />
      </div>
    </div>
  );
};
