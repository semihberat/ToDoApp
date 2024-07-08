import AsyncStorage from '@react-native-async-storage/async-storage';

const setAsyncStorage = async (stateMethod, setStateMethod) => {
  try {
    await AsyncStorage.setItem('@todos', JSON.stringify(stateMethod));
    setStateMethod(stateMethod);
  } catch (error) {
    Alert.alert('Error', 'An error occurred while saving step');
    console.log(error);
  }
};

export default setAsyncStorage;
