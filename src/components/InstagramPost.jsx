import React from "react";
import {Row, Col, Thumbnail, Badge} from "react-bootstrap";

export default class extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={6} md={4}>
          <Thumbnail href={this.props.post.post_url} target="_blank" src={this.props.post.thumbnail_url} />
          <a href={"http://instagram.com/" + this.props.post.username}><h3>{this.props.post.username}</h3></a>
          <p>{this.props.post.caption}</p>
           <p>Likes <Badge>{this.props.post.num_likes}</Badge></p>
        </Col>
      </Row>
    );
  }
}
