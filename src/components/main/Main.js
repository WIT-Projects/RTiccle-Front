import React from 'react';
import { View, StyleSheet,  ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import TitleBar from './titlebar/TitleBar';
import MainContainer from './MainContainer';

import ViewNav from './showticcle/ViewNav';



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
    width : '100%',
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

