import React from 'react';
import {Text, View, Image} from 'react-native';
import { StyleSheet } from 'react-native';
import useUser from '../../../../../data/hook/useUserData';

const MainImageItem = () => {
    
    // 받아온 데이터 사용 예시
    const {user} = useUser();

    return (
        <View style={{marginBottom: 16}}>
            <Image style={styles.image}
            source={require('../../../../../../assets/images/example/book_picture_example_2.jpg')}></Image>
            <View style={styles.titleContainer}>
                {<Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{user[0].title}</Text>}
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
        width: 160,
        height: 160,
        borderRadius: 3,
        resizeMode : 'cover'
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

export default MainImageItem;
