import React from 'react';

import {Modal, View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Input from '../input';

const EditModal = ({
  visible,
  closeModal,
  willEditText,
  setWillEditText,
  modalFunction,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentWrapper}>
          <Text style={styles.title}>Edit</Text>
          <Input
            value={willEditText}
            onChangeText={text => {
              setWillEditText(text);
            }}
            placeholder="Enter the text will edit"
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.close} onPress={closeModal}>
              <Text style={{color: 'white'}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.approve} onPress={modalFunction}>
              <Text style={{color: 'white'}}>Approve</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditModal;
