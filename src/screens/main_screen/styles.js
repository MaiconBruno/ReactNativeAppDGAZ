import { ScrollView, SafeAreaView, Image, View } from 'react-native';
import styled from 'styled-components';

export const Section = styled(SafeAreaView)`
    width: 100%;
    height: 100%;  
    background-color:white;
`;

export const ContainImg = styled(View)`
    width: 100%;
    height:22%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px;
`;

export const ContainerTabs = styled(ScrollView)`
    width: 100%;
    height: 75%;
    padding: 0px 30px;
    margin: 20px 0px;
`;

export const LogoAPP = styled(Image)`
    width: 200px;
    height:80px;
`;
export const Ico = styled(Image)`
    width:25px;
    height:25px;
    transform: rotate(270deg);
`;