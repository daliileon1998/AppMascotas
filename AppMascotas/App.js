
import * as React from 'react';
import { View, Text } from 'react-native';
import { loginScreen } from './src/screens/login';
import { Newregister } from './src/screens/NewRegister';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function navigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={loginScreen} options={{ headerShown: false, title: '' }} />
        <Stack.Screen name="register" component={Newregister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
