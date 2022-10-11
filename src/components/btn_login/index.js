import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Button, TextButton } from './styles';

export default (props) => {
    return (
        <>
            <Button>
                    <TouchableOpacity onPress={props.function}>
                        <TextButton>{props.nameButton}</TextButton>
                    </TouchableOpacity>
            </Button>
        </>
    ); 
}