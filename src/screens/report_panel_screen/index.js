import React from 'react';
import { } from './styles';
import { Text } from 'react-native';

export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

    const repostConsult = async (token) => {
        const api_resp = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/wp/v2/relatorio?status=any',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });
        const status = await statusResponse.json();
        const data = await statusResponse.json();
        console.log(status);
        console.log(data);
    }

    return (
        <>
            <Text>Reports</Text>
        </>
    );
}
