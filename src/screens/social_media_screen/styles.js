import styled from 'styled-components';
import { WebView } from 'react-native-webview';
import { View, Web, Image, ImageBackground, TouchableOpacity } from 'react-native';

export const WebContainer = styled(WebView)`

`;

export const Container = styled(ImageBackground)`
    width: 100%;
    height: 100%;  
    display :flex;
    justify-content: center;
    align-items: center;
`;

export const BoxContent = styled(View)`
    width: 100%;
`;

export const Section = styled(View)`
    width: 100%;
    padding: 0px;
    height: 85%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const LogoAPP = styled(Image)`
    width: 200px;
    height: 82px;
    margin-bottom: 30px;
`;

export const SocialContainer = styled(View)`
    width: 100%;
    height: 15%;
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
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
    width:50px;
    height:50px;
`;