import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../../assets/images/logo/ticcle_logo_6bdcc2.png')} style={styles.signUpLogo} resizeMode='contain'/>
        <Text style={styles.headerText}>R-Ticcle</Text>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('MainNav')}>
          <Image source={require('../../../assets/images/login/login_guest.png')} style={styles.signUpImg} resizeMode='contain'/>
        </TouchableOpacity>
        <View style={styles.grayBorder}></View>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('MainNav')}>
          <Image source={require('../../../assets/images/login/login_google.png')} style={styles.signUpImg} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('MainNav')}>
          <Image source={require('../../../assets/images/login/login_kakao.png')} style={styles.signUpImg} resizeMode='contain'/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    backgroundColor : '#ffffff',
    alignItems: 'center'
  },
  header: {
    flex : 2,
    width : '85%',
    justifyContent: 'center',
    alignItems : 'center', 
    paddingTop : 60,
  },
  signUpLogo :{
    width : 80,
    height : 80
  },
  headerText:{
    fontFamily:'NotoSansKR-Bold',
    fontSize: 24,
    lineHeight: 38,
    color : '#6bdcc2'
  },
  main:{
    flex : 3,
    width: '85%',
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 120
  },
  imgContainer:{
    width:'100%',
    height: '26%',
  }, 
  signUpImg:{
    width:'100%',
    height: '100%'
  },
  grayBorder : {
    width: '96%',
    borderWidth : 0.5,
    borderColor : '#AAAAAA',
    marginTop : 12,
    marginBottom : 12,
  }
})

