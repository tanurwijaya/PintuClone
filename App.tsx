import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./src/screens/main";
import {SafeAreaView} from "react-native";

export default function App() {
  const Stack = createNativeStackNavigator();
  fetch('https://s3.ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/blockchain/Bitcoin.svg') .then(r => r.text())
      .then(text => {
          console.log(text)
      })
  return (
      <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{header: () => null}} name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
  );
}


