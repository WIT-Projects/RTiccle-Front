import React from 'react';
import { View, StyleSheet,  Text } from 'react-native';

import MainListItem from './ticcle/MainListItem';

export default function ListView() {
  return(
<View style={styles.container}>
        <Text style={styles.day}>2021.06.28</Text>
        <View style={styles.content}>
          <MainListItem/>
          <MainListItem/>
          <MainListItem/>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.day}>2021.06.27</Text>
        <View style={styles.content}>
          <MainListItem/>
          <MainListItem/>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.day}>2021.06.25</Text>
        <View style={styles.content}>
          <MainListItem/>
          <MainListItem/>
          <MainListItem/>
          <MainListItem/>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
    paddingHorizontal : 20,
  },
  content: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',

    
  },
  day: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 17,
    marginRight: 'auto',    
    paddingBottom: 16,
  },
  line: {
    flex: 1,
    borderWidth: 3,
    borderColor: '#EFEFEF',
    marginBottom: 15,
  },
})