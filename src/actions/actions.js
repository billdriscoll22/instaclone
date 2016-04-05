import uuid from 'uuid';

export const updatePosts = (posts) => {
  return {
    type: 'UPDATE_POSTS',
    posts: posts
  }
}
