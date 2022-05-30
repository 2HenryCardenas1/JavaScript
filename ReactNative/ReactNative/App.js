import React from 'react';
import NavigationTab from './src/navigation/NavigationTab'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';


export default function App() {
  return (
    
      <NavigationContainer>
        <NavigationTab />
      </NavigationContainer>
    
  )
}


