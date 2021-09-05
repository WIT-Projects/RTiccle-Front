import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function TiccleMoa() {

  const navigateTo = useNavigation()

  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => {navigateTo.goBack()}}>
        <Text>TiccleMoa</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})

