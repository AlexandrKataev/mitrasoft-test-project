import { useParams } from 'react-router-dom';
import { PostList, UserCard } from 'entities/index';

export const UserPage = () => {
  const { userId } = useParams() as { userId: string };

  return (
    <div>
      <UserCard />
      <h6 className="ms-4 mt-4">Посты пользователя:</h6>
      <div className="mt-3">
        <PostList userId={userId} />
      </div>
    </div>
  );
};
