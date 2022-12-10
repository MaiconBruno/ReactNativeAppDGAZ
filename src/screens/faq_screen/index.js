import React, { useState } from 'react';
import { List_Container, LogoAPP, Main_Container, Accordion_BodyText, Image_Container } from './styles';
import { SimpleAccordion } from 'react-native-simple-accordion';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
import { useFocusEffect } from '@react-navigation/native';


export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

    const [faqList, setFaqList] = useState([]);

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
                // console.log('Status da conexão: ' + status)
            } else if (status == 403) {
                console.log('Status da conexão: ' + status)
            } else {
                console.log('Status da conexão: ' + status);
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


    const [listServices, setListServices] = useState([
        {
            id: 1,
            title: 'POSTS para Redes Sociais',
            text: 'Cobramos por Post (1 formato Feed e 1 Formato de Stories), sendo que criamos a Pauta (Assunto), Arte do Post, Conteúdo e Publicamos eles em todas as redes do cliente (Face, Insta, Linkedin, Youtube Shorts, Google Meu Negócio, Twitter, Pinterest). Esse serviço não inclui criação de vídeos ou anúncios. Mas podemos criar a pauta dos vídeos, o cliente pode criar esses, e nos enviar para publicação.',
            link: '#'
        },
        {
            id: 2,
            title: 'Facebook Ads / Meta Business',
            text: 'Criação de anúncios para aumento de engajamento e geração de leads aos clientes via Instagram Ads principalmente. Temos a criação de 1 anúncio gráfico mensal, mais eventuais anúncios utilizando posts publicados dos clientes, em algumas estratégias de marketing. Esse serviço é enviado relatório mensal, e também fazemos todo o processo de vinculação das redes do cliente e geração de pixel para profissionalismo das campanhas',
            link: '#'
        },
    ]);



    return (
        <>
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
                                        height:'auto',
                                        flexDirection: "row",
                                        backgroundColor: "white",
                                        padding: 10,
                                        alignItems: "center",
                                        backfaceVisibility: 'hidden',
                                    }}
                                    titleStyle={{
                                        color: '#535353',
                                        fontWeight: '400',
                                        fontSize: 18,
                                        
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
        </>
    );
}
