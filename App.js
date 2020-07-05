
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';

const RootStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
      
      screenOptions={{
        headerShown: false,
      }}
      
      >
      
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
