import React, { Component } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

export default class LoadingSpinner extends Component {

    render() {
     return(
      <Loader
         type="TailSpin"
         color="#000000"
         height={30}
         width={30}
         timeout={4000} //5 secs

      />
     );
    }
 }