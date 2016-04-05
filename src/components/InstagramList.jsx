import React from "react";
import {Grid} from "react-bootstrap";
import InstagramPost from "./InstagramPost.jsx";

export default class extends React.Component {
  render() {
    return (
      <Grid>
        {this.props.posts.map(post => <InstagramPost key={post.post_url} post={post} />)}
      </Grid>
    );
  }
}
