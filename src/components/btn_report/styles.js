import { View, Text } from 'react-native';
import styled from 'styled-components';


export const Button = styled(View)`
    background-color: #f3f3f3;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    border-radius: 15px;
    border: solid 1px #e6e6e6;
`;
export const Container = styled(View)`
    width: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.bg};
    min-height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`;

export const Column = styled(View)`
    width: ${(props) => props.valueX};
    background-color: ${(props) => props.color};;
    height:100%;
    padding: 10px;
    border-radius: 15px;
`
export const Line = styled(View)`
    width: 100%;
`;
export const Type = styled(Text)`
    color: white;
    font-size: 14px;
    background-color: #00bbff;
    padding: 2px 10px;
    font-weight: 500;
    border-radius: 50px;
    text-align: center;
`;
export const Data = styled(Text)`
    font-size: 16px;
    color: black;
    padding: 0px 5px;
    margin-top: 15px;
    color: #535353;
`;

export const TextButton = styled(Text)`
    color: #434343;
    font-weight: 500;
    font-size: 18px;
    text-transform: capitalize;
    text-align: left; 
`;

export const TextTypeReport = styled(Text)`

`;