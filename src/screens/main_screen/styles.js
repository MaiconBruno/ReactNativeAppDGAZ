import {View, ImageBackground, Image} from 'react-native';
import styled from 'styled-components';


export const Container = styled(View)`
    width: 100%;
    padding: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Section = styled(ImageBackground )`
    width: 100%;
    height: 100%;  
`;

export const LogoAPP = styled(Image)`
    width: 200px;
    height: 82px;
    margin-bottom: 30px;
`;