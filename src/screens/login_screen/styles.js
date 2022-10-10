import { Text, SafeAreaView, TextInput, Image } from 'react-native';
import styled from 'styled-components';


export const Container = styled(SafeAreaView)`
    height: 100%;
    padding: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled(TextInput)`
    background-color: white;
    width: 100%;
    padding: 10px 20px;
    margin: 10px 0px;
    border-radius: 5px;
`;

export const LogoAPP = styled(Image)`
    width: 220px; 
    height: 100px;
    margin-bottom:30px;
`;

export const Title = styled(Text)`
    font-size: 30px;
    color: white;
`;