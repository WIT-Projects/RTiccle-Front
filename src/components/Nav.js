import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './main/Main';
import Splash from './splash/Splash';
import useUser from '../data/hook/useUserData';

const Stack = createNativeStackNavigator();

export default function Nav() {

  const [isLoading, setIsLoading] = useState(true)

  const {setUser} = useUser(); 

  // 로딩 화면에서 데이터 받아오기
  // + 에러값이 반환 됐을 때 설정하기
  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setUser(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {setIsLoading(false)}, 1000)
    } 
  }

  useEffect(() => {
    getMovies();
  }, []);

  

  if(isLoading){
    return <Splash/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
);
}