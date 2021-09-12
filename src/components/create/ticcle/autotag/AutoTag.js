import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, StyleSheet, ScrollView, TextInput, View, Text, TouchableOpacity, Image} from "react-native";


export default function AutoTag() {

  const [text, onChangeText] = useState("");
  const [tag, setTag] = useState([{
    id : 0,
    tagName : '',
    length : 0
  }
]);

  const nextId = useRef(1);
  const [visible, setVisible] = useState(true);
  const [inputWidth,setInputWidth] = useState(340);

  const onRemove = id => {
    setTag(tag.filter(tag => tag.id !== id));
    nextId.current -= 1;
    if (nextId.current == 1) {
      setInputWidth(340);
      setVisible(true);
    };
  }


  useEffect(() => {
    (tag.length > 1 || text.length > 0) ?  setVisible(false) : setVisible(true) ;

    (tag.length > 1) ? setInputWidth(40 + text.length * 11) : setInputWidth(340);

    //# 로 시작하고 스페이스바 눌렀을 때 태그 만들어짐
    if(text.startsWith('#') && text.endsWith(' ')){
      const newTag ={
        id : nextId.current,
        tagName : text.substring(1, text.length - 1), //# 랑 ' ' 빼고 저장
        length : text.length - 2
      }
      setTag([...tag, newTag]);
      onChangeText("");
      nextId.current += 1;
      setInputWidth(50)
    }
  }, [text])





  return (
    <View style={styles.inputContainer}>
      <ScrollView horizontal={true} style={styles.scrollContainer}>

        <View style={styles.tagPlaceHolder}>
          <View style={[styles.tagExampleContainer, !(visible)&& styles.tagExampleNoVisible]}>
            <Text style={styles.tagExampleContainer}>#태그 뒤에 스페이스바 입력시 자동완성!</Text>
          </View>
        </View>
      
        <View style={styles.userTagList}>
          {tag.map((tag) => {
            if(tag.id > 0) {
            return(
              <View key={tag.id} style={styles.userTagContainer}>
                  <Text  style={styles.userHashTag}>#</Text>
                  <Text style={styles.userTag}>{tag.tagName}</Text>
                <TouchableOpacity style={styles.userTagTouch} onPress={() => onRemove(tag.id)}>
                  <Image source={require('../../../../../assets/images/icon/icon_x.png')} style={{width:14, height : 14, marginLeft: 1}}/>
                </TouchableOpacity>
              </View>
            )
          } 
          })}
        </View>
        <TextInput style={[styles.input, {width: inputWidth}]} onChangeText={onChangeText} value={text}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer : {
    position : 'relative',
    marginHorizontal: 25,
    height : 48,
    width : 350,
    margin: 12,
    borderBottomColor:'#CECECE',
    borderBottomWidth: 1,
    alignItems : 'flex-start',
    marginTop: 15,
  },
  scrollContainer:{
    position : 'relative',
    width : '100%',
    height : '100%',
    paddingBottom : 6,
  },
  input: {
    zIndex : 2,
    height: '100%',
    fontSize : 15,
    // backgroundColor : 'rgba(0,0,0,0.1)'
  },
  tagPlaceHolder:{
    zIndex : 1,
    position : 'absolute',
    top : 0,
    bottom : 0,
    left : 0,
    width : 300,
    paddingTop : 8,
    paddingLeft : 5,
    flexDirection : 'row',
  },
  tagExampleContainer:{
    color:"#A5A5A5",
    fontSize : 16,
    paddingLeft : 2,
    lineHeight : 26,
  },
  tagExampleNoVisible:{
    opacity: 0
  },
  userTagList:{
    flexDirection : 'row',
    zIndex : 3,
    top: 0,
    left: 0,
    marginTop : 1,
    paddingTop : 2,
    paddingLeft : 5,
  },
  userTagContainer:{
    flexDirection : 'row',
    alignItems : 'center',
    borderRadius : 20,
    height : 34,
    paddingHorizontal : 8,
    paddingBottom : 1,
    marginLeft : 1,
    marginRight : 4,
    backgroundColor : '#6BDCC2',
  },
  userTagTouch:{

  },
  userHashTag :{
    fontSize : 15,
    fontFamily : 'Roboto-Medium',
    color : '#ffffff',
  },
  userTag:{
    padding: 2,
    fontSize : 15,
    fontFamily : 'Roboto-Medium',
    color : '#ffffff',
  }
});

