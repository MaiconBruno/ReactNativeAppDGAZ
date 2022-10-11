import React from 'react';
import { } from './styles';
import {Text} from 'react-native';

export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

    return (
        <>
        <Text>Services</Text>
        </>
    );
}
