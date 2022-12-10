import React, { useState } from 'react';
import { List_Container, LogoAPP, Main_Container, Accordion_BodyText, Image_Container } from './styles';
import { SimpleAccordion } from 'react-native-simple-accordion';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
export default ({ navigation }) => {

    function navigateScreens(screenLocate) {
        navigation.navigate(screenLocate);
    }

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
                    {listServices.map(data => {
                        return (
                            <SimpleAccordion viewContainerStyle={
                                {
                                    backgroundColor: "white",
                                    padding: 10,
                                    borderBottomEndRadius: 5, 
                                    borderBottomStartRadius: 5,
                                    marginTop: 10,
                                    paddingTop: 5,
                                    backfaceVisibility:'hidden',
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
                                viewInside={
                                    <Accordion_BodyText>
                                        {data.text}
                                    </Accordion_BodyText>}
                                title={`${data.title}`} />
                        )
                    })}
                </List_Container>
            </Main_Container>
        </>
    );
}
