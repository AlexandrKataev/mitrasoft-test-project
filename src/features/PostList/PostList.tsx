import { Post } from 'entities/index';
import styles from './PostList.module.scss';
import { FC, useEffect, useState } from 'react';

import { postService } from 'shared/api/services/postService';
import { IPost } from 'shared/models/IPost';

export const PostList: FC = () => {
  const [postsArray, setPostsArray] = useState([] as IPost[]);

  useEffect(() => {
    postService.getPostList().then((data) => setPostsArray(data));
  }, [setPostsArray]);

  return (
    <div className={styles.container}>
      {postsArray.map((post) => (
        <Post title={post.title} body={post.body} userId={post.userId} id={post.id} key={post.id} />
      ))}
    </div>
  );
};
