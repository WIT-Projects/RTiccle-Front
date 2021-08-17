import React, { useEffect, useState, useRef } from "react";
import { TextInput, SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView, Image, TouchableOpacity, Alert, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

const SubTiccleList = ({date, title, imgUrl, content}) => {
    

    return (
        <View style = {styles.container}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.container2}>
                <Image style={styles.img} source={{uri:imgUrl}}/>
                <Text style={styles.content}>{content}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginHorizontal: 25,
        elevation: 5,
        marginTop:25,
        padding: 15,
    },
    date:{
        fontSize: 12,
        color: '#000000',
        marginBottom: 10,
    },
    title:{
        fontSize: 14,
        color: '#000000',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    container2:{
        flexDirection: 'row',
    },
    img:{
        borderWidth: 1.5,
        borderRadius: 8,
        width: 90,
        height: 90,
    },
    content:{
        fontSize: 12,
        color: '#000000',
        marginBottom: 10,
        width: 230,
        marginHorizontal:20,
    },
});

export default SubTiccleList;
