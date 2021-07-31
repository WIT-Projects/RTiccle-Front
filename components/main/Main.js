import React from 'react';
import { View, StyleSheet,  Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabBarHeight = windowHeight * 0.067;
const imgContainerHeight = windowHeight * 0.237;
const ContainerWidth = windowWidth * 0.882;

export default function Main() {

  return(
    <View style={styleMain.container}>
      <View style={styleMain.titleBar}>
        <Ionicons name="menu" size={30} color="#ffffff" style={styleMain.iconLeft}/>
        <Text style={styleMain.titleText}>R-Ticcle</Text>
        <SimpleLineIcons name= "magnifier" size={22} color="#ffffff" style={styleMain.iconRight}/>
      </View>

      <View style={styleMain.mainContainer}>
      <View style={styleMain.imgContainer}>
        <View style={styleMain.mainImg}></View>
      </View>
      <View style={styleMain.filterMenu}>
        <View style={styleMain.filterTextContainerNoSelect}>
          <Text style={styleMain.filterTextNoSelect}>그룹별</Text>
        </View>
        <View style={styleMain.filterTextContainerSelect}>
          <Text style={styleMain.filterTextSelect}>날짜순</Text>
        </View>
        <View style={styleMain.filterIconContainer}>
          <MaterialIcons name="filter-alt" size={24} color="#000000" style={styleMain.filterIcon}/>
          <Ionicons name="image-outline" size={24} color="#000000" style={styleMain.filterIcon}/>
        </View>
        </View>
      </View>
    </View>
  )
}

const styleMain = StyleSheet.create({
  container:{
    backgroundColor : '#ffffff',
    width : windowWidth,
    alignItems : 'center'
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
    width : ContainerWidth,
  },
  imgContainer:{
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

  }
})