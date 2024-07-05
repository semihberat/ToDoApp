/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';

function App() {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="My Todo App" />
      <View>
        <Text>Todo App Week 1</Text>
        <Icon name="pluscircle" size={25} color="red"></Icon>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
