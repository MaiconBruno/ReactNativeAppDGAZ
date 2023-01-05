import styled from 'styled-components';
import { WebView } from 'react-native-webview';
import { View, Image, TouchableOpacity } from 'react-native';


export const SocialContainer = styled(View)`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: white;
`;

export const BoxSocial = styled(TouchableOpacity)`
    height: 30px;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgColor};   
`;

export const IcoSocial = styled(Image)`
    width:45px;
    height:45px;
`;