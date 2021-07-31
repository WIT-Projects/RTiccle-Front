import React from 'react';
import {Text, View, Image} from 'react-native';
import { StyleSheet } from 'react-native';

const MainListItem = () => {
    return (
        <View style={{marginBottom: 16}}>
            <Image style={styles.image}
            source={{ uri: 'https://images.unsplash.com/photo-1581700251863-338f0b6a42b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'}}></Image>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">글 제목이 매우 길면 어떻게 될까요오오오</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{paddingRight: 8}}><Text className="tag1" style={styles.tag}>#경제</Text></View>
                <View style={{paddingRight: 8}}><Text className="tag2" style={styles.tag}>#금융</Text></View>
                <View style={{paddingRight: 8}}><Text className="tag3" style={styles.tag}>#명언</Text></View>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    image: {
        width: 140,
        height: 140,
        borderRadius: 2,
    },
    titleContainer: {
        paddingTop: 8,
        paddingBottom: 3,
        paddingRight: 3,
        width: 140,
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 11,
        color: "#000000",
        fontWeight: "700"
    },
    tag: {
        fontFamily: 'Roboto',
        fontSize: 9,
        color: "#6B6B6B",
        fontWeight: "700"
    }
});

export default MainListItem;
