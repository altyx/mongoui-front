import React, { Component} from 'react';
import axios from 'axios';

import Collection from './collection';

export default class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: [],
    };
  }
  componentDidMount() {
    axios.get('collections')
      .then(res => this.setState({collections: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Liste des collections</h1>
        <Collection collection={this.state.collections[0]} />
        <Collection collection={this.state.collections[1]} />
      </div>
    )
  }
}