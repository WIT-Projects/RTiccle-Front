import React from 'react';
import { View, StyleSheet,  Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MainListItem from './MainListItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabBarHeight = windowHeight * 0.067;
const imgContainerHeight = windowHeight * 0.2;
const ContainerWidth = windowWidth * 0.882;

export default function Main() {
  const clickedFunction = () => {
    Alert.alert("Floating Button Clicked");
  }
  return(
    <View style={styles.container}>
      <ScrollView>
      {/* Navigator */}
      <View style={styles.titleBar}>
        <Ionicons name="menu" size={30} color="#ffffff" style={styles.iconLeft}/>
        <Text style={styles.titleText}>R-Ticcle</Text>
        <SimpleLineIcons name= "magnifier" size={22} color="#ffffff" style={styles.iconRight}/>
      </View>

      {/* Main Container */}
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <View style={styles.mainImg}></View>
        </View>
        <View style={styles.filterMenu}>
          <View style={styles.filterTextContainerNoSelect}>
            <Text style={styles.filterTextNoSelect}>그룹별</Text>
          </View>
          <View style={styles.filterTextContainerSelect}>
            <Text style={styles.filterTextSelect}>날짜순</Text>
          </View>
          <View style={styles.filterIconContainer}>
            <MaterialIcons name="filter-alt" size={24} color="#000000" style={styles.filterIcon}/>
            <Ionicons name="image-outline" size={24} color="#000000" style={styles.filterIcon}/>
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
        <Image source={require('../../assets/images/writeFAB.png')}  style={styles.floatingButtonStyle} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  // Main css
  container:{
    backgroundColor : '#ffffff',
    width : windowWidth,
    // alignItems : 'center'
  },
  titleBar:{
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'space-between',
    backgroundColor : '#00CE9D',
    height : tabBarHeight,
    width : '100%'
  },
  titleText:{
    color: '#ffffff',
    fontSize : 22,
    fontFamily : 'NotoSansKR-Bold',
    alignItems : 'center',
    lineHeight : 30,
  },
  iconLeft:{
    paddingLeft : 14,
  },
  iconRight:{
    paddingRight : 18,
  },
  mainContainer :{
    // width : ContainerWidth,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 16,
  },
  imgContainer: {
    height : imgContainerHeight,
    width : ContainerWidth,
    marginTop: 30,
  },
  mainImg:{
    height : '100%',
    width : '100%',
    backgroundColor : '#C4C4C4',
  },
  filterMenu:{
    flexDirection : 'row',
    width : ContainerWidth,
    marginTop: 30,
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
    backgroundColor : '#00CE9D',
    borderWidth : 1,
    borderColor : '#00CE9D',
    borderRadius: 20,
  },
  filterTextSelect:{
    color : '#ffffff',
  },
  filterIconContainer:{
    flex : 3,
    flexDirection : 'row',
    justifyContent : 'flex-end',
  },
  filterIcon:{
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
    bottom: 45,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
})
