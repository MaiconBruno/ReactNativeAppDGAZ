import styled from 'styled-components';
import { View, Text, Image, ScrollView} from 'react-native';

export const Main_Container = styled(View)`
    height: 100%;
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;
export const List_Container = styled(ScrollView)`
   width: 100%;
   height: 80%;
`;
export const Image_Container = styled(View)`
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;  
`;

export const LogoAPP = styled(Image)`
    width: 150px; 
    height: 65px;
    margin-bottom:30px;
`;

export const Accordion_BodyText = styled(Text)`
    font-size: 16px;
    padding: 0;
    max-width: 100%;
`;