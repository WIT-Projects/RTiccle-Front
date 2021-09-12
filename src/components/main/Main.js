import React, { useState } from 'react';
import { View, StyleSheet,  Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import TitleBar from './titlebar/TitleBar';
import MainContainer from './MainContainer';

import ViewNav from './showticcle/ViewNav';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// 비율로 설정? 아직 모름
// const tabBarHeight = windowHeight * 0.067;
// const imgContainerHeight = windowHeight * 0.25;
// const ContainerWidth = windowWidth * 0.882;


export default function Main({navigation}) {

  const navigateTo = useNavigation();
  const clickedFunction = () => {
    Alert.alert("Floating Button Clicked");
  }


  return(
    <View style={styles.container}>
      <ScrollView>
      {/* Navigator */}
      <TitleBar navigation={navigation}/>

      {/* Main Container */}
      <MainContainer/>

      {/* List Container */}
      <ViewNav/>


      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigateTo.navigate('MainTiccle')} style={styles.touchableOpacityStyle} >
        <Image source={require('../../../assets/images/writeFAB.png')}  style={styles.floatingButtonStyle} />
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  // Main css
  container:{
    backgroundColor : '#ffffff',
    width : windowWidth,
  },

  // Floating button css
  touchableOpacityStyle:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 25,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
})

