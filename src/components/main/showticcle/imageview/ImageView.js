import React from 'react';
import { View, StyleSheet,  Text } from 'react-native';

import MainImageItem from './ticcle/MainImageItem';

export default function ImageView() {
  return(
<View>
        <Text style={styles.day}>2021.06.28</Text>
        <View style={styles.content}>
          <MainImageItem/>
          <MainImageItem/>
          <MainImageItem/>
          <MainImageItem/>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.day}>2021.06.27</Text>
        <View style={styles.content}>
          <MainImageItem/>
          <MainImageItem/>
        </View>
        <View style={styles.line}></View>
        <Text style={styles.day}>2021.06.25</Text>
        <View style={styles.content}>
          <MainImageItem/>
          <MainImageItem/>
          <MainImageItem/>
        </View>
  </View>
  )
}

const styles = StyleSheet.create({
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
})