import { PostList } from 'entities/index';

export const HomePage = () => {
  return (
    <div>
      <PostList userId="all" />
    </div>
  );
};
