import React from 'react';
import { TouchableOpacity } from 'react-native'
import {
    CardBody,
    CardTitle,
    CardContent,
    ColumnContet,
    ColumnIco,
    IcoCard,
} from './styles';

export default (props) => {
    return (
        <TouchableOpacity onPress={props.callBackFunction}>
            <CardBody color={props.colorBody}>
                <ColumnContet>
                    <CardTitle fontColor={props.fontColor} >{props.title}</CardTitle>
                    <CardContent textColor={props.textColor} >{props.content}</CardContent>
                </ColumnContet>
                <ColumnIco>
                    <IcoCard
                        source={{
                            uri: `${props.icoURL}`,
                        }}
                    />
                </ColumnIco>
            </CardBody>
        </TouchableOpacity>
    );
}