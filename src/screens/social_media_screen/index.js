import React from 'react';
import { Text, Button} from 'react-native';
import {} from './styles';

export default ({navigation}) => {
  function openMainScreen () {
    navigation.navigate('mainScreen');
  }
  return (
   <>
   <Text>Media</Text>
   </>
  );
}