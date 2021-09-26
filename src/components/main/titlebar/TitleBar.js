import React from 'react';
import { View, StyleSheet,  Text,  Image, TouchableOpacity } from 'react-native';

const tabBarHeight = 55;

export default function TitleBar({navigation}) {
  return(
    <View style={styles.titleBar}>
        <View style={styles.titleBarContainer}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={require('../../../../assets/images/icon/icon_menu.png')} style={styles.iconLeft}/>
          </TouchableOpacity>

          <View>
            <Text style={styles.titleText}>R-Ticcle</Text>
          </View>

          <Image source={require('../../../../assets/images/icon/icon_magnifier.png')} style={styles.iconRight}
          onTouchEnd={()=> {}}/> 
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  titleBar:{
    
    backgroundColor : '#ffffff',
    height : tabBarHeight,
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
  titleBarContainer:{
    width : '100%',
    paddingHorizontal: 20,
    height : tabBarHeight,
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'space-between',
  },
  titleText:{
    color: '#6BDCC2',
    fontSize : 24,
    fontFamily : 'NotoSansKR-Bold',
    alignItems : 'center',
    lineHeight : 32,
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
})