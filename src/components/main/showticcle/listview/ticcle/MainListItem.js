import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import useUser from '../../../../../data/hook/useUserData';

export default function MainListItem() {
    
    // 받아온 데이터 사용 예시
    const {user} = useUser();

    return (
      <TouchableOpacity style={styles.container}>
          <View style={styles.titleContainer}>  
            <Text style={styles.title}>글 제목이 매우 길면 어떻게</Text>
          </View>

          <View style={styles.tagContainer}>
            <Text style={styles.tag}>#경제</Text>
            <Text style={styles.tag}>#문학</Text>
            <Text style={styles.tag}>#IT</Text>
          </View>

      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container:{
    width : 350,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingHorizontal : 8,
    paddingVertical : 16,
    marginBottom : 12,

    borderColor : '#000000',
    borderWidth : 0.5,
    borderRadius : 4,
  },
  titleContainer:{
    width : 180,

  },
  title:{
    fontFamily : 'Roboto-Regular',
    fontSize : 15,
    color : '#000000'
  },
  tagContainer:{
    flexDirection: 'row'

  },
  tag:{
    fontFamily : 'Roboto-Regular',
    fontSize : 15,
    color : '#6B6B6B',
    marginLeft : 5,
  }
});

