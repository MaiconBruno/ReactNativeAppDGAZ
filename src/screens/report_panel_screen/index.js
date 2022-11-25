import React, { useEffect, useState } from 'react';
import { Container, ImgReport } from './styles';
import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginButton from '../../components/btn_login';
export default ({ navigation }) => {

    const [reportUrl, setReportUrl] = useState(null);

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Url não suportada`)
        }
    }


    const consultUserToken = async () => {
        const _token = await AsyncStorage.getItem('@tokenCode');
        reportAPI_GET(_token);
    }

    const reportAPI_GET = async (token) => {
        const api_resp = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/wp/v2/relatorio?status=any',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

        const status = api_resp.status;
        const data = await api_resp.json();
        console.log(status);
        console.log(data[0].acf.link_relatorio);
        setReportUrl(data[0].acf.link_relatorio);

    }

    useEffect(() => {
        consultUserToken();
    })

    return (
        <>
            <Container>
                <ImgReport/>
                <LoginButton nameButton={'Exibir Relatório'} function={() => { openUrl(reportUrl); }} />
            </Container>
        </>
    );
}
