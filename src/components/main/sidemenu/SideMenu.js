import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function SideMenu({navigation}) {
  const navigateTo = useNavigation();
  return (
    <View style={styles.container}>
      {/* Profile */}
      <View style={styles.profileContainer}>
        <Image source={require('../../../../assets/images/icon/icon_x.png')} style={styles.iconX} onTouchEnd={()=> {navigation.closeDrawer()}}/> 

        {/* Img */}
        <View style={styles.profileImgContainer}>
          <Image source={require('../../../../assets/images/profile_img.png')} style={styles.profileImg}/> 
        </View>

        {/* Text */}
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>게스트 1234</Text>
          <Image source={require('../../../../assets/images/icon/icon_pencil.png')} style={styles.iconPencil}/> 
        </View>
      </View>

      {/* Menu List */}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.listContainer} onPress={() => {navigateTo.navigate('TiccleMoa')}}>
          <Image source={require('../../../../assets/images/icon/icon_ticclemoa.png')} style={styles.iconTicclemoa}/> 
          <Text style={styles.listText}>티끌 모아</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer} onPress={() => {navigateTo.navigate('Coin')}}>
          <Image source={require('../../../../assets/images/icon/icon_coin.png')} style={styles.iconCoin}/> 
          <Text style={styles.listText}>코인충전</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer} onPress={() => {navigateTo.navigate('Settings')}}>
          <Image source={require('../../../../assets/images/icon/icon_setting.png')} style={styles.iconSetting}/> 
          <Text style={styles.listText}>설정</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer}>
          <Image source={require('../../../../assets/images/icon/icon_moon.png')} style={styles.iconMoon}/> 
          <Text style={styles.listText}>다크모드</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{

  },
  profileContainer:{
    width: '100%',
    height : 200,
    backgroundColor : '#6bdcc2',
    alignItems : 'center',
    justifyContent : 'center'
  },
  iconX : {
    position : 'absolute',
    top : 8,
    right  : 8,
    width : 30,
    height : 30,
    resizeMode : 'contain'
  },
  profileImgContainer :{
    width : 90,
    height : 90,
    borderRadius : 45,
  },
  profileImg : {
    width : '100%',
    height : '100%'
  }, 
  profileNameContainer: {
    paddingTop : 18,
    flexDirection : 'row'
  },
  profileName:{
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
  iconPencil : {
    width :12,
    height : 12,
    resizeMode : 'contain',
    marginTop : 4,
    marginLeft : 6,
  },
  menuContainer : {
    justifyContent : 'center',
    marginTop : 16,
  },
  listContainer : {
    flexDirection : 'row',
    alignItems : 'center',
    paddingVertical : 15,
    paddingLeft : 18
  },
  listText: {
    fontFamily : 'Roboto-Regular',
    marginLeft : 14,
    fontSize : 15,
  },
  iconTicclemoa : {
    width : 18,
    height : 16,
    marginBottom : 2
  },
  iconCoin : {
    width : 15,
    height : 15
  },
  iconSetting : {
    width : 15,
    height : 15
  },
  iconMoon : {
    width : 15,
    height : 15
  }
})

