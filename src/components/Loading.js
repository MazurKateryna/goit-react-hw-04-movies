import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export class Loading extends Component {
  render() {
    return <Loader type="Rings" color="#00BFFF" height={80} width={80} />;
  }
}

export default Loading;