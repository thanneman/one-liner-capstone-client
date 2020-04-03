import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default class LoadingSpinner extends Component {
  render() {
    return (
      <Loader
        type='TailSpin'
        color='#0e60fb'
        height={30}
        width={30}
        timeout={8000} //8 secs
      />
    );
  }
}
