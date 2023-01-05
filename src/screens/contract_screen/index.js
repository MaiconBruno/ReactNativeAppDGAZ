import React, { useState } from 'react';
import { Container, Section } from './styles';
import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginReport from '../../components/btn_report';
import LoaddingElement from '../../components/loadding';
export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

    const [loading, setLoading] = useState(true);
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
            const api_resp = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/wp/v2/contrato?status=any',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

            const status = api_resp.status;

            if (status == 200) {
                const data = await api_resp.json();
                setArrayRespAPI(data);
                setLoading(false);
            } else if (status == 403) {
                alert('Token invalido! Faça login novamente.');
                navigateScreens('app');
            } else {
             
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
            {loading ? <LoaddingElement /> :
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
                                        nametype={data.acf.area_contrato}
                                        data={data.date}
                                        function={() => { openUrl(data.acf.link_contrato) }} />
                                )
                            } catch (error) {
                                // ...
                            }

                        })}

                    </Container>
                </Section>
            }
        </>
    );
}
