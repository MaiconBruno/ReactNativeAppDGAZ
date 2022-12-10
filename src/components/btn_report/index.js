import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Button, TextButton, Container, Column, Line, Type, Data } from './styles';

export default (props) => {
    return (
        <>
            <Button>
                <TouchableOpacity onPress={props.function}>
                    <Container bg={`#f3f3f3`}>
                        <Column valueX={'70%'} color={'#f3f3f3'}>
                            <Line>
                                <TextButton>{props.nameButton}</TextButton>
                            </Line>
                            <Line>
                                <Data>{props.data}</Data>
                            </Line>
                        </Column>
                        <Column valueX={'30%'} color={'#f3f3f3'}>
                            <Type>{props.nametype}</Type>
                        </Column>
                    </Container>
                </TouchableOpacity>
            </Button>
        </>
    );
}