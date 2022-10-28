import React, { useState } from 'react';
import { Container, Section, BoxContact, Ico, ColumnRight, LogoAPP, LinkContact, SocialTextCotanin, TextContactSocial } from './styles';
import { Alert, Linking } from 'react-native';
import LogoIco from '../../images/icons/dgaz-logo-no-bg.png';
export default ({ navigation }) => {

    function navigateScreens(route) {
        navigation.navigate(route);
    }

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Url não suportada`)
        }
    }

    const [contact, setContact] = useState(
        [
            {
                id: 1,
                title: 'whatsapp',
                context: '+5511943187520',
                color: '#0BB2D4',
                dimensionX: 50,
                dimensionY: 80,
                icoURL: 'https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-whatsapp-social-media-tanah-basah-glyph-tanah-basah.png',
                UrlButton: 'whatsapp://send?phone=+5511943187520&text=Olá, estou entrando em contato pelo APP DGAZ',
            },
            {
                id: 2,
                title: 'telefone',
                context: '+551124507404',
                color: '#0BB2D4',
                dimensionX: 50,
                dimensionY: 80,
                icoURL: 'https://img.icons8.com/ios-filled/50/FFFFFF/apple-phone.png',
                UrlButton: 'tel:+551124507404',
            },

            {
                id: 6,
                title: 'Email',
                context: '',
                color: '#02D49F',
                dimensionX: 100,
                dimensionY: 80,
                icoURL: 'https://img.icons8.com/ios-filled/50/FFFFFF/send-mass-email.png',
                UrlButton: 'mailto:contato@dgaz.com.br',
            },
        ]
    );

    return (
        <Container source={{
            uri: `https://www.dgaz.com.br/wp-content/uploads/2022/08/fundo_depoimentos.jpg`,
        }}>
            <Section>
                <LogoAPP source={LogoIco} />
                {contact.map(data => {
                    return (
                        <BoxContact onPress={() => {
                            openUrl(data.UrlButton);
                        }} key={data.id} color={data.color} dimensionX={data.dimensionX} dimensionY={data.dimensionY}>
                            <ColumnRight>
                                <Ico source={{
                                    uri: `${data.icoURL}`,
                                }} />
                            </ColumnRight>
                        </BoxContact>
                    )
                })}
            </Section>
            <SocialTextCotanin>
                <LinkContact onPress={() => {
                    openUrl(`whatsapp://send?phone=+5511943187520&text=Olá, estou entrando em contato pelo APP DGAZ`);
                }}>
                    <TextContactSocial>+55 11 94318-7520</TextContactSocial>
                </LinkContact>
                <LinkContact onPress={() => {
                    openUrl(`tel:+551124507404`);
                }}>
                    <TextContactSocial>+55 11 2450-7404</TextContactSocial>
                </LinkContact>
                <LinkContact onPress={() => {
                    openUrl(`mailto:contato@dgaz.com.br`);
                }}>
                    <TextContactSocial>contato@dgaz.com.br</TextContactSocial>
                </LinkContact>
            </SocialTextCotanin>

        </Container>
    );
}
