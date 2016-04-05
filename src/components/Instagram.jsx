import React from "react";
import {connect} from "react-redux";
import {updatePosts} from "../actions/actions.js";
import store from "../stores/store.js";
import InstagramList from "./InstagramList.jsx";
import InstagramSearch from "./InstagramSearch.jsx";
import {Panel} from "react-bootstrap";

class Instagram extends React.Component {

  render () {

    return (
        <Panel>
          <h1>Instagram Challenge</h1>
          <InstagramSearch></InstagramSearch>
          <InstagramList posts={this.props.posts}></InstagramList>
        </Panel>

    );
  }
}

var mapStateToProps =  (posts) => {
  return { posts };
}

export default connect(mapStateToProps)(Instagram);
