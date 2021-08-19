import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text, TouchableOpacity, Image} from "react-native";

export default function ScrollTag() {
  const [link, onChangeLink] = useState("");

  return (
    <View style={{width: 350, overflow: 'hidden', backgroundColor: 'aqua'}}>
      <ScrollView horizontal={true}>
        <TextInput style={styles.textInput} onChangeText={onChangeLink} placeholder="Scroll Tag" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: 350,
    marginHorizontal: 25,
    borderBottomColor: '#CECECE',
    borderBottomWidth: 1,
    fontSize: 16,
    marginTop: 15,
    backgroundColor: '#f0f0f0'
},
})