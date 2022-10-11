import React from 'react';
import { Text, Button } from 'react-native';
import { Container } from './styles';
import Card from '../../components/card_interface';

export default ({ navigation }) => {

  function openMediaScreen() {
    navigation.navigate('mediaScreen');
  }

  return (
    <>
      <Container>
        <Card />
        <Button title='MainScreen' onPress={openMediaScreen}></Button>
      </Container>


    </>
  );
}