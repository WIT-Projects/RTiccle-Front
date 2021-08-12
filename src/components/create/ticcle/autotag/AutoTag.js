import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity, Image} from "react-native";

// '#yes' 같이 4글자 이상은 상관 없는데
// '#2' 같은 1~2글자 짜리 하면 커서 위치가 애매함 

export default function AutoTag() {
  const [text, onChangeText] = useState("");
  const [tag, setTag] = useState([{
    id : 0,
    tagName : '',
    length : 0
  }]);
  const nextId = useRef(1);



  const [visible, setVisible] = useState(true);

  const [inputWidth,setInputWidth] = useState(355);

  const onRemove = id => {
    let addWidth = tag.filter(tag => tag.id === id)[0].length * 6 + 19
    setInputWidth(inputWidth + addWidth)
    setTag(tag.filter(tag => tag.id !== id))
    nextId.current -= 1
  }


  useEffect(() => {
    if(nextId.current > 1 || text.length > 0){
      setVisible(false)
    } else {
      setVisible(true)
    }
    //# 로 시작하고 스페이스바 눌렀을 때 태그 만들어짐
    if(text.startsWith('#') && text.endsWith(' ')){
      const newTag ={
        id : nextId.current,
        tagName : text,
        length : text.length
      }
      setTag([...tag, newTag]);
      setInputWidth(inputWidth - (newTag.length * 8 + 23))// tag 크기 만큼 input 박스 크기 줄이기 -> flex end로 설정해놨기 때문에 오른쪽으로 기준으로 길이 짧아짐
      onChangeText("");
      nextId.current += 1;
    }
  }, [text, inputWidth])




  return (
    <View style={styles.inputContainer}>
      <TextInput
          style={[styles.input, {width : inputWidth}]}
          onChangeText={onChangeText}
          value={text}
        />
      <View style={styles.tagPlaceHolder}>
          <View style={[styles.tagExampleContainer, !(visible)&& styles.tagExampleNoVisible]}><Text style={styles.tagExampleContainer}>ex. #마케팅 #경제</Text></View>
        </View>
          <View style={styles.userTagList}>
        {tag.map((tag) => {
          if(tag.id > 0) {
          return(
            <View style={styles.userTagContainer}>
              <TouchableOpacity style={styles.userTagTouch} onPress={() => onRemove(tag.id)}>
                <Text key={tag.id} style={styles.userTag}>{tag.tagName}</Text>
                <Image source={require('../../../../../assets/images/icon/icon_x.png')} style={{width:9, height : 9}}/>
              </TouchableOpacity>
            </View>
          )
        }
          })}
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer : {
    position : 'relative',
    marginHorizontal: 25,
    height : 40,
    margin: 12,
    borderBottomColor:'#CECECE',
    borderBottomWidth: 1,
    alignItems : 'flex-end',
    marginTop: 15,
  },
  input: {
    zIndex : 2,
    height: '100%',
    width : '100%',
  },
  tagPlaceHolder:{
    zIndex : 1,
    position : 'absolute',
    height: '100%',
    width : '100%',
    paddingTop : 8,
    paddingLeft : 5,
    flexDirection : 'row',
  },
  tagExampleContainer:{
    color:"#A5A5A5",
    fontSize : 16,
    paddingLeft : 2,
  },
  tagExampleNoVisible:{
    opacity: 0
  },
  userTagList:{
    zIndex : 3,
    flexDirection : 'row',
    position : 'absolute',
    top: 0,
    left: 0,
    marginTop : 1,
    paddingTop : 8,
    paddingLeft : 5,
  },
  userTagContainer:{
    borderRadius : 20,
    height : 22,
    paddingRight: 5,
    paddingLeft : 3,
    marginLeft : 1,
    marginRight : 3,
    backgroundColor : '#6BDCC2',
  },
  userTagTouch:{
    flexDirection : 'row',
    alignItems : 'center'
  },
  userTag:{
    padding: 2,
    fontSize : 14,
    fontFamily : 'NotoSansKR-Regular',
    lineHeight : 18,
    color : '#ffffff',
  }
});