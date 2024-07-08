/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import Header from './src/components/header/';
import Input from './src/components/input';
import Todo from './src/components/todo/index';
import generalStyles from './src/utils/generalStyles';
import {colors} from './src/utils/constants';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    AsyncStorage.setItem('@todos', JSON.stringify([...todos, newTodo]))
      .then(() => {
        setTodos([...todos, newTodo]);
      })
      .catch(err => {
        Alert.alert('Error', 'An error occurred while saving step');
      });
    setText('');
  };

  useEffect(() => {
    AsyncStorage.getItem('@todos')
      .then(res => {
        if (res !== null) {
          const parsedRes = JSON.parse(res);
          console.log('parsedRes', parsedRes);
          setTodos(parsedRes);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="My Todo App" />
      <View style={generalStyles.flex1}>
        <Input
          placeholder="Trial"
          onChangeText={text => {
            setText(text);
          }}
          hasIcon={true}
          onIconPress={addTodo}
          value={text}
        />
        <View style={styles.todosWrapper}>
          {todos.length === 0 ? (
            <Text style={styles.emptyText}>Nothing to do yet.</Text>
          ) : (
            <ScrollView style={styles.scrollView}>
              {todos?.map(todo => (
                <Todo
                  todos={todos}
                  setTodos={setTodos}
                  key={todo?.id}
                  todo={todo}
                />
              ))}
            </ScrollView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  todosWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  scrollView: {
    flexGrow: 1,
  },
  date: {
    color: colors.textPrimary,
  },
});

export default App;
