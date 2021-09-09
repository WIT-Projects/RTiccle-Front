import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, FlatList, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import realm, {
    getAllBigTiccle,
    getAllSmallTiccle,
    getAllPhoto,
    getTiccleById,
    getSmallTiccleById,
    getPhotoById,
    filterByGroup,
    addTiccle,
    addSmallTiccle,
    addPhoto,
}
 from "./Database";

const Test = () => {
    // Set initial states
    const [bigTiccle, setBigTiccle] = useState(getAllBigTiccle());
    const [smallTiccle, setSmallTiccle] = useState(getAllSmallTiccle());
    const [photo, setPhoto] = useState(getAllPhoto());

    // Render
    return (
        <>
            <StatusBar barStyle="light-content"/>
            <ScrollView style={{padding: 16}}>
                <>
                {/* 추가 버튼 */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{paddingTop: 8}}
                        onPress={() => {
                            addTiccle("BOOK","제목", "https://google.com", ["#테스트1", "#테스트2"], null);
                            setBigTiccle(getAllBigTiccle());
                        }}
                        >큰 티끌 추가하기</Text>

                    <Text style={{paddingTop: 8}}
                        onPress={() => {
                            addSmallTiccle(1, "작은티끌 제목", "https://naver.com", "내용내용내용");
                            setSmallTiccle(getAllSmallTiccle());
                        }}
                    >작은 티끌 추가하기</Text>

                    <Text style={{paddingTop: 8}}>이미지 추가하기</Text>
                </View>

                {/* 리스트 */}
                <Text style={{marginTop: 8, fontWeight: 'bold'}}>큰 티끌 리스트</Text>
                <FlatList
                    data={bigTiccle}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <View style={{padding: 10}}>
                                <Text>ID:{item.id}</Text>
                                <Text>Date:{item.date.toString()}</Text>
                                <Text>Group: {item.group}</Text>
                                <Text>Title: {item.title}</Text>
                                <Text>Link: {item.link} </Text>
                                <Text>TagList: {item.tagList} </Text>
                                <Text>Image: {item.mainImage} </Text>
                                <Text>SmallTiccle 개수: {item.contentList.length} </Text>
                            </View>
                        )
                    }}
                />

                <View style={{width: '100%', backgroundColor: '#000000', height: 1, marginVertical: 8}} />

                <Text style={{marginTop: 8, fontWeight: 'bold'}}>작은 티끌 리스트</Text>
                <FlatList
                    data={smallTiccle}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return(
                            <View style={{padding: 10}}>
                                <Text>ID:{item.id}</Text>
                                <Text>Title: {item.title}</Text>
                                <Text>Link: {item.link} </Text>
                                <Text>Image: {item.imageList} </Text>
                                <Text>Content: {item.content} </Text>
                            </View>
                        )
                    }}
                />

                <View style={{width: '100%', backgroundColor: '#000000', height: 1, marginVertical: 8}} />

                <Text style={{marginTop: 8, fontWeight: 'bold'}}>이미지 리스트</Text>
                </>
            </ScrollView>
        </>
    );
};

export default Test;