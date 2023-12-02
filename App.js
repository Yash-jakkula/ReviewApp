import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawNav from './navigators/DrawNav';
import 'react-native-gesture-handler';
import StackNav from './navigators/StackNav';
import TabNav from './navigators/Tab';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  main: {
    flex: 1,
  },
  login: {
    flex: 1,
  },
});
