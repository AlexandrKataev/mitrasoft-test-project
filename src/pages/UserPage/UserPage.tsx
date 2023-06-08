import { PostList, UserCard } from 'entities/index';
import { useEffect } from 'react';

export const UserPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <UserCard />
      <h6 className="ms-4 mt-4">Посты пользователя:</h6>
      <div className="mt-3">
        <PostList />
      </div>
    </div>
  );
};
