import React from 'react';
import { View, StyleSheet,  Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import MainListItem from './MainListItem';
import Mountain from './Mountain/Mountain';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// 비율로 설정? 아직 모름
// const tabBarHeight = windowHeight * 0.067;
// const imgContainerHeight = windowHeight * 0.25;
// const ContainerWidth = windowWidth * 0.882;

const tabBarHeight = 51;
const imgContainerHeight = 220;
const ContainerWidth = 350;

export default function Main() {

  const navigation = useNavigation();
  const clickedFunction = () => {
    Alert.alert("Floating Button Clicked");
  }

  const label = ["신문/기사", "만화", "SNS", "블로그", "책", "웹연재물","기타"]

  return(
    <View style={styles.container}>
      <ScrollView>
      {/* Navigator */}
      <View style={styles.titleBar}>
        <View style={styles.titleBarContainer}>
          <Image source={require('../../../assets/images/icon/icon_menu.png')} style={styles.iconLeft}/>
          {/* 상단 R-Ticcle 누르면 로그인페이지로 (로그인페이지 버튼 생기면 삭제 예정)*/}
          <View  onTouchEnd={()=> {navigation.navigate('SignUp')}}>
            <Text style={styles.titleText}>R-Ticcle</Text>
          </View>
          <Image source={require('../../../assets/images/icon/icon_magnifier.png')} style={styles.iconRight}
          onTouchEnd={()=> {navigation.navigate('AutoTag')}}/> 
        </View>
      </View>

      {/* Main Container */}
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <View style={styles.mainImg}>
            <Mountain/>
          </View>
          <View style={styles.labelContainer}>
              {label.map((label) => {return (<Text key={label} style={styles.labelText}>{label}</Text>)})}
            </View>
        </View>
        <View style={styles.filterMenu}>
          <View style={styles.filterTextContainerNoSelect}>
            <Text style={styles.filterTextNoSelect}>그룹별</Text>
          </View>
          <View style={styles.filterTextContainerSelect}>
            <Text style={styles.filterTextSelect}>날짜순</Text>
          </View>
          <View style={styles.filterIconContainer}>
            <Image source={require('../../../assets/images/icon/icon_filter.png')} style={styles.filterIcon}/> 
            <Image source={require('../../../assets/images/icon/icon_menu_dec.png')} style={styles.filterIcon}/> 
          </View>
        </View>
        </View>

      {/* List Container */}
      <View>
        <Text style={styles.day}>2021.06.28</Text>
        <View style={styles.content}>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.day}>2021.06.27</Text>
        <View style={styles.content}>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.day}>2021.06.25</Text>
        <View style={styles.content}>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
          <MainListItem></MainListItem>
        </View>
      </View>
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity activeOpacity={0.5} onPress={clickedFunction} style={styles.touchableOpacityStyle} >
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
  titleBar:{
    backgroundColor : '#ffffff',
    height : tabBarHeight,
    width : '100%',
    alignItems : 'center',
    marginTop: 4,

    //bottom-Shadow
    shadowColor: "#000000",
    shadowOffset: {
	width: 0,
	height: 1,
    },
  shadowOpacity: 0.2,
  elevation: 4,
  },
  titleBarContainer:{
    width : ContainerWidth,
    height : tabBarHeight,
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'space-between',
  },
  titleText:{
    color: '#6BDCC2',
    fontSize : 23,
    fontFamily : 'NotoSansKR-Bold',
    alignItems : 'center',
    lineHeight : 30,
  },
  iconLeft:{
    marginTop: 2,
    width : 20,
    height : 18,
  },
  iconRight:{
    marginTop: 1,
    width : 20,
    height : 20,
  },
  mainContainer :{
    flex: 1,
    alignItems: 'center',
    paddingBottom: 16,
  },
  imgContainer: {
    height : imgContainerHeight,
    width : ContainerWidth,
    marginTop: 30,
    alignItems : 'center'
  },
  mainImg:{
    width : '100%',
    // backgroundColor : '#C4C4C4',
  },
  labelContainer:{
  width: '90%',
  flexDirection:'row',
  justifyContent:'space-between',
  },
  labelText:{
    fontFamily:'NotoSansKR-Bold',
    fontSize: 12,
  },

  //MainContainer Style
  filterMenu:{
    flexDirection : 'row',
    width : ContainerWidth,
    marginTop: 14,
  },
  filterTextContainerNoSelect:{
    flex : 2,
    marginRight: 16,
    paddingTop : 6,
    paddingBottom : 6,
    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    borderColor : '#ACACAC',
    borderRadius: 20,
  },
  filterTextNoSelect:{
    color : '#ACACAC',
  },
  filterTextContainerSelect:{
    flex : 2,
    marginRight: 20,
    paddingTop : 6,
    paddingBottom : 6,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#6BDCC2',
    borderWidth : 1,
    borderColor : '#6BDCC2',
    borderRadius: 20,
  },
  filterTextSelect:{
    color : '#ffffff',
  },
  filterIconContainer:{
    flex : 3,
    flexDirection : 'row',
    justifyContent : 'flex-end',
    alignItems : 'center'
  },
  filterIcon:{
    width: 16,
    height : 18,
    marginLeft : 12,
  },
  // List css
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 26,
  },
  day: {
    paddingHorizontal: 26,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 11,
    marginRight: 'auto',    
    paddingBottom: 16,
  },
  line: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#EFEFEF',
    marginBottom: 15,
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
