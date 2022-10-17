import styled from 'styled-components';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';

export const IcoLoading = styled(Image)`
    height: 80px;
    width: 80px;
`;

export const Container = styled(View)`
   height: 100%;
   width: 100%;
   position:absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: white;
`