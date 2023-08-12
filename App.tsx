/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthLoadingScreen from './src/AuthLoadingScreen';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const App = () => {
  return (
    <SafeAreaView style={{flex:1}} >
      <NavigationContainer>
        <AuthLoadingScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}



export default App;
