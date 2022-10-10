import { View, Text} from 'react-native';
import styled from 'styled-components';


export const Button = styled(View)`
    padding: 10px 30px;
    border-radius: 2px;
    background-color: #00A2E2;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

export const TextButton = styled(Text)`
    color: white;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
`;