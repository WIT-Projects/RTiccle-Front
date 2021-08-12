import React from 'react'
import { View, StyleSheet, StatusBar, Text} from 'react-native';

import Logo from './Logo';

export default function Splash () {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <View style ={styles.logoContainer}>
        <Logo/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    width : '100%',
    height : '100%',  
    backgroundColor : '#6BDCC2',
    justifyContent : 'center',
    alignItems : 'center'
  },
  logoContainer : {
    width : 70,
    height : 70
  }
})

