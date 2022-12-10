import styled from 'styled-components';
import { View, ImageBackground, Image, ScrollView } from 'react-native';


export const Container = styled(ScrollView)`
    height: 100%;
    width: 100%;
    padding: 30px;
`;
export const Section = styled(ImageBackground)`
    width: 100%;
    height: 100%;  
`;


export const ImgReport = styled(Image)`
    width: 100%;
    height: 200px;
    border: 2px #1cbdea;
    border-radius: 2px;
`;

