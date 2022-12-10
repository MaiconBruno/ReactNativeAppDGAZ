import styled from 'styled-components';
import { View, Text, Image } from 'react-native';

export const CardBody = styled(View)`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: ${(props) => props.color};
    min-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 25px; 
`;

export const ColumnContet = styled(View)`
    width: 85%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const ColumnIco = styled(View)`
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const CardTitle = styled(Text)`
    color: ${(props) => props.fontColor};
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    
`;

export const CardContent = styled(Text)`
    color: ${(props) => props.textColor};
    font-size: 12px;
    width: 100%; 
`;

export const IcoCard = styled(Image)`
background-color: white;
width: 50px;
height: 50px;
background-color: transparent;
`;



