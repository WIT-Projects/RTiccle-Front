import React from 'react';
import { View, StyleSheet,  Text,  Image, TouchableOpacity } from 'react-native';

import Mountain from './Mountain/Mountain';

import setMainView from '../../data/hook/setMainView';

const imgContainerHeight = 220;

export default function MainContainer() {

  const label = ["신문/기사", "만화", "SNS", "블로그", "책", "웹연재물","기타"]
  const {viewImageList, setViewImageList} = setMainView();
  const filterIconUrls ={
    imageURL: require('../../../assets/images/icon/icon_image.png'),
    listURL : require('../../../assets/images/icon/icon_menu_dec.png')
  }


  
  return(
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
          <TouchableOpacity style={styles.filterIconTouchable}>
            <Image source={require('../../../assets/images/icon/icon_filter.png')} style={styles.filterIcon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterIconTouchable} onPress={() => {setViewImageList(!viewImageList)}}>
            { (viewImageList) && <Image source={filterIconUrls.listURL} style={styles.filterIcon}/>}
            { !(viewImageList) && <Image source={filterIconUrls.imageURL} style={styles.filterIconImage}/>}
          </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer :{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal : 20,
    paddingBottom: 16,
  },
  imgContainer: {
    height : imgContainerHeight,
    width : '100%',
    marginTop: 30,
    alignItems : 'center'
  },
  mainImg:{
    width : '100%',
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

  filterMenu:{
    flexDirection : 'row',
    width : '100%',
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
  filterIconTouchable: {
    marginLeft : 12,
  },
  filterIcon:{
    width: 20,
    height : 20,
    marginLeft : 4,
    resizeMode : 'contain'
  },
  filterIconImage :{
    width : 24,
    height : 24,
    resizeMode : 'contain',
    marginTop : 3,
  }
})