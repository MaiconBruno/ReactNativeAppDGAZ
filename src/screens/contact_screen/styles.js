import styled from 'styled-components';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';



export const Container = styled(ImageBackground)`
    width: 100%;
    height: 100%;  
    display :flex;
    justify-content: center;
    align-items: center;
`;


export const Section = styled(View)`
    width: 100%;
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const BoxContact = styled(TouchableOpacity)`
    width: ${(props) => props.dimensionX}%;
    min-height: ${(props) => props.dimensionY}px;
    display: flex;
    background-color: ${(props) => props.color};
    justify-content: center;
    align-items: center;
    padding: 10px;
    border:solid 2px white;
    border-radius: 5px;
    flex-direction: row;
`;

export const ColumnLeft = styled(View)`
    width: 85%;
    display: flex;
    justify-content:center;
    align-items:center;
`

export const ColumnRight = styled(View)`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxTitle = styled(Text)`

    color: white;
    font-weight: 500;
    letter-spacing: 1.2px;
    width: 100%;
    margin-top: 10px;
    padding-left: 10px;
    text-align: center;
`;
export const BoxText = styled(Text)`
    color: #333333;
    margin-top: 5px;
`;

export const Ico = styled(Image)`
    width: 35px;
    height: 35px;
`;

export const LogoAPP = styled(Image)`
    width: 200px;
    height: 82px;
    margin-bottom: 30px;
`;

export const SocialTextCotanin = styled(View)`
width: 75%;

`;

export const TextContactSocial = styled(Text)`
    font-size: 16px;
    font-weight: 600;
    color: #636363;
    font-weight: 400;
    text-align: left;
`;

export const LinkContact = styled(TouchableOpacity)`
    margin: 5px 0px;
    padding: 0px 5px;
`;