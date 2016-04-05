module.exports = (state = [], action) => {
  switch(action.type){
    case "UPDATE_POSTS":
      return action.posts.map( (post, index) => {
        return {
          username: post.user.username,
          hashtags: post.tags,
          thumbnail_url: post.images.thumbnail.url,
          num_likes: post.likes.count,
          caption: post.caption.text,
          post_url: post.link
        }
      });
    default: return state;
  }
}
