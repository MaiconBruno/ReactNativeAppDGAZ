import React, { useEffect, useState } from 'react';
import { Container, ImgReport, Section } from './styles';
import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginReport from '../../components/btn_report';
import ReportImage from '../../images/illustration/reportImage.png'
export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }


    const [arrayRespAPI, setArrayRespAPI] = useState([{}]);

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
        if (_token == '' || _token == null) {
            alert('Serviço indisponivel, por favor tente novamente mais tarde.');
        } else {
            reportAPI_GET(_token);
        }
    }

    const reportAPI_GET = async (token) => {
        try {
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
            console.log(status);

            if (status == 200) {
                const data = await api_resp.json();
                setArrayRespAPI(data);
            } else if (status == 403) {
                alert('Token invalido! Faça login novamente.');
                navigateScreens('app');
            } else {
                console.log('Status da conexão: ' + status);
            }
            // setReportUrl(data[0].acf.link_relatorio)
        } catch {
            alert('Serviço indisponivel, por favor tente novamente mais tarde.');
            navigateScreens('app');
        }

    }


    consultUserToken();


    return (
        <>
            <Section source={{
                uri: `https://www.dgaz.com.br/wp-content/uploads/2022/08/fundo_depoimentos.jpg`,
            }}>
                <Container>
                    {/* <ImgReport
                        source={ReportImage} /> */}
                    {arrayRespAPI.map((data) => {
                        try {
                            return (
                                <LoginReport key={data.id}
                                    nameButton={data.title.rendered.replace(/Privado:/g, "")}
                                    nametype={data.acf.area_relatorio}
                                    data={data.date}
                                    function={() => { openUrl(data.acf.link_relatorio) }} />
                            )
                        } catch (error) {
                            // ...
                        }

                    })}

                </Container>
            </Section>
        </>
    );
}
