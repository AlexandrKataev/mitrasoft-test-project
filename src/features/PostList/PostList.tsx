import { Post } from 'entities/index';
import styles from './PostList.module.scss';
import { FC } from 'react';

const postsArray = [
  {
    header: 'Afwawf iajwifj wij',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium qui. Suscipit reiciendis eaque aliquam distinctio. Aliquam, molestiae quasi? Minima aperiam ad soluta quam doloribus deserunt excepturi quibusdam enim et!',
    userId: 'jacktwin',
    postId: '1',
    comments: [
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeqwqwryman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
    ],
  },
  {
    header: 'Wrwg',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium qui. Suscipit reiciendis eaque aliquam distinctio. Aliquam, molestiae quasi? Minima aperiam ad soluta quam doloribus deserunt excepturi quibusdam enim et!',
    userId: 'jacktwin1',
    postId: '2',
    comments: [
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
    ],
  },
  {
    header: 'wrq ejowiejf eijeeeee',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, accusantium qui. Suscipit reiciendis eaque aliquam distinctio. Aliquam, molestiae quasi? Minima aperiam ad soluta quam doloribus deserunt excepturi quibusdam enim et!',
    userId: 'jacktwin2',
    postId: '3',
    comments: [
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
      { userId: 'dkeyman', text: 'wqwrqrqwrqwr ewuwhfwufh ewfhewufhweifhwi' },
    ],
  },
];

export const PostList: FC = () => {
  return (
    <div className={styles.container}>
      {postsArray.map((post) => (
        <Post
          header={post.header}
          text={post.text}
          userId={post.userId}
          postId={post.postId}
          comments={post.comments}
          key={post.userId}
        />
      ))}
    </div>
  );
};
