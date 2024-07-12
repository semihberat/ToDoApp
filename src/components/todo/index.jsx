import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import EditModal from '../editModal';
import setAsyncStorage from '../../helpers/asyncStorage';
import firestore from '@react-native-firebase/firestore';
const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(todo.text);

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
            firestore()
              .collection('todos')
              .doc(todo.id)
              .delete()
              .then(() => {
                console.log('Todo deleted!');
              });
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
            firestore()
              .collection('todos')
              .doc(todo.id)
              .update({
                completed: !todo.completed,
              })
              .then(() => {
                console.log('Todo updated!');
              });
          },
          style: 'destructive',
        },
      ],
    );
  };

  const editTodo = () => {
    if (willEditText === '') {
      Alert.alert('Blank Error', 'Text Area have not to be blank!');
      return;
    }
    firestore()
      .collection('todos')
      .doc(todo.id)
      .update({
        text: willEditText,
        date: new Date(),
      })
      .then(() => {
        console.log('Todo updated!');
      });
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date.seconds * 1000).toLocaleDateString('tr-TR')}
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
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon name="edit" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color="red" />
        </TouchableOpacity>
      </View>
      <EditModal
        visible={openModal}
        willEditText={willEditText}
        modalFunction={editTodo}
        setWillEditText={setWillEditText}
        closeModal={() => {
          setOpenModal(false);
        }}
      />
    </View>
  );
};

export default Todo;
