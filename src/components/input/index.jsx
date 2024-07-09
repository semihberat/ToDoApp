import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from './style';

const Input = ({
  placeholder = 'Type Something',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  value = '',
  onChangeText = () => {},
  onIconPress = () => {
    value = '';
  },
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        multiline={multiline}
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        hasIcon={hasIcon}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon
            name={iconName}
            onChangeText={onChangeText}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
