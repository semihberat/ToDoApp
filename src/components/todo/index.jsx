import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert(
      'Deleting Process',
      `Are you sure to delete id ${todo.id} todo?`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'Delete',
          onPress: () => {
            const filteredTodos = todos.filter(item => item.id !== todo.id);
            setTodos(filteredTodos);
          },
          style: 'destructive',
        },
      ],
    );
  };

  const changeCompleted = () => {
    Alert.alert(
      'Completed',
      `The assignment will mark as ${
        todo.completed === false ? 'completed' : 'uncompleted'
      }, are you sure?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Mark',
          onPress: () => {
            const tempArr = [];
            for (let i = 0; i < todos.length; i++) {
              if (todos[i].id !== todo.id) {
                tempArr.push(todos[i]);
              } else {
                const newTodo = {
                  ...todo,
                  completed: !todo.completed,
                };
                tempArr.push(newTodo);
              }
            }
            setTodos(tempArr);
          },
          style: 'destructive',
        },
      ],
    );
  };
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCompleted}>
          <Icon
            name={todo?.completed === true ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color="green"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
