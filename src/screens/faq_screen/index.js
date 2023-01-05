import React, { useState } from 'react';
import { List_Container, LogoAPP, Main_Container, Accordion_BodyText, Image_Container } from './styles';
import { SimpleAccordion } from 'react-native-simple-accordion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
import { useFocusEffect } from '@react-navigation/native';
import LoaddingElement from '../../components/loadding';

export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

    const [faqList, setFaqList] = useState([]);
    const [loading, setLoading] = useState(true);

    const faqAPI_GET = async (token) => {
        try {
            const api_resp = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/wp/v2/faq?status=any',
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
                setFaqList(data);
                setLoading(false);
                // console.log('Status da conexão: ' + status)
            } else if (status == 403) {
                // console.log('Status da conexão: ' + status)
            } else {
                // console.log('Status da conexão: ' + status);
            }
            // setReportUrl(data[0].acf.link_relatorio)
        } catch (e) {
            // alert('Serviço indisponivel, por favor tente novamente mais tarde.');
            console.log(e);
        }

    }

    const consultUserToken = async () => {
        const _token = await AsyncStorage.getItem('@tokenCode');
        if (_token == '' || _token == null) {
            alert('Serviço indisponivel, por favor tente novamente mais tarde.');
        } else {
            faqAPI_GET(_token);
        }
    }

    useFocusEffect(
        () => {
            consultUserToken();
        }
    );

    return (
        <>
            {loading ? <LoaddingElement/> :
                <Main_Container>
                    <Image_Container>
                        <LogoAPP source={LogoIco} />
                    </Image_Container>
                    <List_Container>
                        {faqList.map(data => {
                            try {
                                return (
                                    <SimpleAccordion viewContainerStyle={
                                        {
                                            backgroundColor: "white",
                                            padding: 10,
                                            borderBottomEndRadius: 5,
                                            borderBottomStartRadius: 5,
                                            marginTop: 10,
                                            paddingTop: 0,
                                            backfaceVisibility: 'hidden',
                                        }
                                    }
                                        bannerStyle={{
                                            height: 'auto',
                                            flexDirection: "row",
                                            backgroundColor: "white",
                                            padding:10,
                                            alignItems: "flex-start",
                                            backfaceVisibility: 'hidden',
                                        }}
                                        titleStyle={{
                                            color: '#535353',
                                            fontWeight: '400',
                                            fontSize: 18,
                                            textAlign: 'left'
                                        }}
                                        showArrows={true} arrowColor='#0EA5CD' key={data.id}
                                        title={`${data.title.rendered}`}
                                        viewInside={
                                            <Accordion_BodyText>
                                                {data.content.rendered.replace(/<\/p>/g, "").replace(/<p>/g, "")}
                                            </Accordion_BodyText>}
                                    />
                                )
                            } catch {

                            }

                        })}
                    </List_Container>
                </Main_Container>
            }
        </>

    );
}
