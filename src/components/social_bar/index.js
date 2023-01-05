import React, { useState } from 'react';
import { SocialContainer, BoxSocial, IcoSocial } from './styles';
import { Alert, Linking } from 'react-native';
import Facebook from '../../images/icons/facebook.png';
import Instagram from '../../images/icons/instagram.png';
import Tiktok from '../../images/icons/tiktok.png';
import Youtube from '../../images/icons/youtube.png';

export default () => {

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Url não suportada`)
        }
    }


    const [social, setSocial] = useState(
        [
            {
                id: 1,
                SocialName: 'Tiktok',
                SocialUrlIco: Tiktok,
                SocialColor: '',
                Url: 'https://www.tiktok.com/@dgazmkt',
            },
            {
                id: 2,
                SocialName: 'Instagram',
                SocialUrlIco: Instagram,
                SocialColor: '',
                Url: 'https://www.instagram.com/dgazmkt/',
            },
            {
                id: 3,
                SocialName: 'Facebook',
                SocialUrlIco: Facebook,
                SocialColor: '',
                Url: 'https://www.facebook.com/dgazmkt/',
            },
            {
                id: 4,
                SocialName: 'Youtube',
                SocialUrlIco: Youtube,
                SocialColor: '',
                Url: 'https://www.youtube.com/c/DgazBr',
            },
        ]
    )
    return (
        <SocialContainer>
            {social.map(data => {
                return (
                    <BoxSocial
                        onPress={() => openUrl(data.Url)}
                        key={data.id} bgColor={data.SocialColor}>
                        <IcoSocial source={data.SocialUrlIco} />
                    </BoxSocial>
                )
            })}
        </SocialContainer >
    )
}