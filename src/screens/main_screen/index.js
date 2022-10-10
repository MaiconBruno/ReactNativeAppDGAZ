import React from 'react';
import { Text, Button} from 'react-native';
import {} from './styles';

export default ({navigation}) => {

  function openMediaScreen () {
    navigation.navigate('mediaScreen');
  }

  return (
   <>
    <Text>Main</Text>
    <Button title='MainScreen' onPress={openMediaScreen}></Button>
   </>
  );
}