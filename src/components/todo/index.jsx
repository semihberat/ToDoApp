import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
const Todo = ({todo = {}}) => {
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{todo?.text}</Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('tr-TR')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity>
          <Icon
            name={todo?.completed === true ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color="green"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="closecircle" size={25} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
