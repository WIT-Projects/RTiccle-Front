import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './login/Login';
import MainNav from './main/MainNav';
import Splash from './splash/Splash';
import MainTiccle from './create/ticcle/MainTiccle';
import SubTiccle from './create/ticcle/SubTiccle';

// Side Menu
import Settings from './main/sidemenu/setting/Settings';
import TiccleMoa from './main/sidemenu/ticclemoa/TiccleMoa';
import Coin from './main/sidemenu/coin/Coin';

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
        <Stack.Screen name="SignUp" component={Login}/>
        <Stack.Screen name="MainNav" component={MainNav}/>
        <Stack.Screen name="MainTiccle" component={MainTiccle}/>
        <Stack.Screen name="SubTiccle" component={SubTiccle}/>
        <Stack.Screen name="TiccleMoa" component={TiccleMoa}/>
        <Stack.Screen name="Coin" component={Coin}/>
        <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
);
}

