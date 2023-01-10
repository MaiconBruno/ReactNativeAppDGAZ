import React, { useState } from 'react';
import { SocialContainer, BoxSocial, IcoSocial } from './styles';
import { Alert, Linking } from 'react-native';
import Twitter from '../../images/icons/Twitter.png';
import Instagram from '../../images/icons/Instagram.png';
import Linkedin from '../../images/icons/Linkedin.png';
import Youtube from '../../images/icons/Youtube.png';

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
                SocialName: 'Linkedin',
                SocialUrlIco: Linkedin,
                SocialColor: '',
                Url: 'https://www.linkedin.com/in/danielgaz/',
            },
            {
                id: 2,
                SocialName: 'Twitter',
                SocialUrlIco: Instagram,
                SocialColor: '',
                Url: 'https://twitter.com/dgaz',
            },
            {
                id: 3,
                SocialName: 'Facebook',
                SocialUrlIco: Twitter,
                SocialColor: '',
                Url: 'https://twitter.com/dgaz',
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