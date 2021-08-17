import React from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  //toValue = 배속 duration = 시간
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 2,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <LottieView source={require('./lottie/LogoEffect.json')} progress={this.state.progress}/>
    );
  }
}

