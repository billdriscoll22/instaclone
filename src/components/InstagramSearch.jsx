import React from "react";
import request from "superagent";
import store from "../stores/store.js";
import {updatePosts} from "../actions/actions.js";
import JSONP from "jsonp-es6";
import {Button} from "react-bootstrap";


export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  componentDidMount() {
    var self = this;
    this.timer = setInterval(() => {
      if (self.state.query && self.state.query.length) {
        self.queryInstagram();
      }
    }, 10000);
  }

  /*componentWillUnmount () {
    clearInterval (this.timer);
  }*/

  queryInstagram(event){
    var searchTerm = this.state.query;
    if (event) {
      event.preventDefault();
      searchTerm = this.refs.query.value;
      this.setState({ query: searchTerm });
    }

    var url = "https://api.instagram.com/v1/tags/" + searchTerm + "/media/recent";
    var params = {'client_id': "fc0684e1bff848829e018e9e16269567", 'count': '3'};
    JSONP(url, params).then( (response) => {
      store.dispatch(updatePosts(response.data));
   });
  }

  render () {

    return (
      <form onSubmit={this.queryInstagram.bind(this)}>
        <label>Search Instagram:</label>
        <input className="form-control" type="text" ref="query" name="query" />
        <Button style={{ margin: '10px 0px 10px 0px' }} bsStyle="primary" type="submit">Search</Button>
      </form>
    );
  }
}
