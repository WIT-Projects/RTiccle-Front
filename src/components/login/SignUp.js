import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>나만의 티끌산을</Text>
        <Text style={styles.headerText}>만들어보세요!</Text>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../../assets/images/login/sign_up_naver.png')} style={styles.signUpImg} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../../assets/images/login/sign_up_kakao.png')} style={styles.signUpImg} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('Main')}>
          <Image source={require('../../../assets/images/login/sign_up_facebook.png')} style={styles.signUpImg} resizeMode='contain'/>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>로그인 / 회원가입</Text>
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
    flex : 1,
    width : '85%',
    justifyContent: 'center',
    marginTop : 10,
  },
  headerText:{
    fontFamily:'NotoSansKR-Bold',
    fontSize: 24,
    lineHeight: 38,
  },
  main:{
    flex : 1,
    width: '85%',
    justifyContent : 'center'
  },
  imgContainer:{
    width:'100%',
    height: '26%'
  }, 
  signUpImg:{
    width:'100%',
    height: '100%'
  },
  bottom:{
    flex : 1,
    width: '85%',
    alignItems: 'center',
  },
  bottomText:{
    fontFamily: 'NotoSansKR-Regular',
    fontSize: 15,
    lineHeight: 24
  }

})
