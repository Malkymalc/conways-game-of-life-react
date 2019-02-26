import React { Component } from 'react';
import '../styles.splash.css'
import SplashScreen from './splashScreen.js';


const withSplash = (Game) => {

  return class extends Component {

    constructor(props){
      super(props)
      this.state = {
        loading: true
      }
    }

    componentDidMount(){
      setTimeout(() => {
        this.setState({loading: false});
      }, 1500)
    }

    return (
      loading ? <SplashScreen /> : <Game />;
    );



}

export default withSplash;
