import React, { Component } from 'react';
import axios from 'axios';
import Keys from './keys';
import DisplayData from './displayData';

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      keys: [],
    };
  }
  componentDidMount() {
    axios.get(`/data/${this.props.match.params.name}`)
      .then((response) => {
        this.setState({
          data: [...response.data],
          keys: Object.keys(response.data[1]),
        });
      })
      .catch(err => console.log(err));
  }

 
  render() { 
    return(
      <div>
        <Keys keys={this.state.keys}/>
        <DisplayData data={this.state.data} keys={this.state.keys}/>
      </div>
    )
  }
}
