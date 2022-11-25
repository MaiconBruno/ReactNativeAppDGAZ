import React, { useEffect, useState } from 'react';
import { Container, ImgReport, Section } from './styles';
import { Alert, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginReport from '../../components/btn_report';
import ReportImage from '../../images/illustration/reportImage.png'
export default ({ navigation }) => {

  
    const [arrayRespAPI, setArrayRespAPI] = useState([]);

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
        setArrayRespAPI(data);
        // setReportUrl(data[0].acf.link_relatorio)
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
                    {arrayRespAPI.map(data => {
                        return (
                            <LoginReport  key={data.id} 
                            nameButton={data.title.rendered.replace(/Privado:/g, "")} 
                            nametype={data.acf.area_relatorio}  
                            data={data.date} 
                            function={() => { openUrl(data.acf.link_relatorio); }} />
                        )
                    })}

                </Container>
            </Section>
        </>
    );
}
