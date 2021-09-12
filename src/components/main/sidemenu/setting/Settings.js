import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

const titleBarHeight = 55;
const ContainerWidth = 350;

export default function Settings() {

  const navigateTo = useNavigation()

  return (
    <View style = {styles.container}>
      {/* Title Bar */}
      <View style={styles.titleBar}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => {navigateTo.goBack()}}>
          <Image source={require('../../../../../assets/images/icon/icon_back_black.png')} style={styles.iconBack}/>
        </TouchableOpacity>

        <Text style={styles.titleText}>설정</Text>
      </View>

      {/* Settings List */}
      <View style={styles.settingListContainer}>
        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.forWidth}>
            <Image source={require('../../../../../assets/images/icon/settings/icon_lock.png')} style={styles.iconLock}/>
            <Text style={styles.listText}>잠금 설정</Text>
            <Image source={require('../../../../../assets/images/icon/settings/icon_right_arrow_gray.png')} style={styles.iconRightArrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.forWidth}>
            <Image source={require('../../../../../assets/images/icon/settings/icon_brush.png')} style={styles.iconBrush}/>
            <Text style={styles.listText}>테마 설정</Text>
            <Image source={require('../../../../../assets/images/icon/settings/icon_right_arrow_gray.png')} style={styles.iconRightArrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.forWidth}>
            <Image source={require('../../../../../assets/images/icon/settings/icon_refresh.png')} style={styles.iconRefresh}/>
            <Text style={styles.listText}>동기화</Text>
            <Image source={require('../../../../../assets/images/icon/settings/icon_right_arrow_gray.png')} style={styles.iconRightArrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.forWidth}>
            <Image source={require('../../../../../assets/images/icon/settings/icon_CS.png')} style={styles.iconCS}/>
            <Text style={styles.listText}>고객센터</Text>
            <Image source={require('../../../../../assets/images/icon/settings/icon_right_arrow_gray.png')} style={styles.iconRightArrow}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer}>
          <View style={styles.forWidth}>
            <Image source={require('../../../../../assets/images/icon/settings/icon_star.png')} style={styles.iconStar}/>
            <Text style={styles.listText}>앱 평가하기</Text>
            <Image source={require('../../../../../assets/images/icon/settings/icon_right_arrow_gray.png')} style={styles.iconRightArrow}/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : '#ffffff'
  },
  titleBar:{
    
    backgroundColor : '#ffffff',
    height : titleBarHeight,
    width : '100%',
    alignItems : 'center',

    //bottom-Shadow

    shadowColor: "#000000",
    shadowOffset: {
	width: 0,
	height: 1,
    },
  shadowOpacity: 0.2,
  elevation: 6,
  },
  iconContainer : {
    position : 'absolute',
    top : 16,
    left : 20,
  },
  iconBack : {
    width : 12,
    height : 20,
    resizeMode : 'contain'
  },
  titleText : {
    fontFamily: 'NotoSansKR-Medium',
    fontSize : 19,
  },
  settingListContainer : {
    marginTop : 18,
  },
  listContainer : {
    alignItems : 'center',
    paddingVertical: 6,
  },
  forWidth:{
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    width : ContainerWidth
  },
  listText: {
    fontFamily : 'NotoSansKR-Regular',
    fontSize : 16,
    width : '80%'
  },
  iconLock : {
    width : 20,
    height : 20,
    resizeMode : 'contain'
  },
  iconBrush: {
    width : 20,
    height : 20,
    resizeMode : 'contain'
  },
  iconRefresh : {
    width : 16,
    height : 16,
    resizeMode : 'contain',
    marginHorizontal : 2,
  },
  iconCS : {
    width : 20,
    height : 20,
    resizeMode : 'contain'
  },
  iconStar : {
    width : 16,
    height : 16,
    resizeMode : 'contain',
    marginHorizontal : 2,
  },
  iconRightArrow : {
    width : 11,
    height : 24,
    resizeMode : 'contain'
  }
})

