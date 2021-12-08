import React from 'react';

import { Post } from '../types';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li className="PostList__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);