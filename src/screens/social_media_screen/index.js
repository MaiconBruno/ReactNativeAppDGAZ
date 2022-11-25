import React, { useState, } from 'react';
import { Container, Section, WebContainer, BoxContent, SocialContainer, BoxSocial, IcoSocial } from './styles';
import { Alert, Linking } from 'react-native';
import LoaddingElement from '../../components/loadding';
import { useRoute } from '@react-navigation/native';

export default ({ navigation }) => {

  function navigateScreens(screenLocate) {
    navigation.navigate(screenLocate);
  }
  // const route = useRoute();
  // const { user_connect, user_login, user_email, user_name, user_token } = route.params;
  // console.log( user_email );

  const [loading, setLoading] = useState(true);

  
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
        SocialUrlIco: 'https://img.icons8.com/color/48/000000/tiktok--v1.png',
        SocialColor: '',
        Url: 'https://www.tiktok.com/@dgazmkt',
      },
      {
        id: 2,
        SocialName: 'Instagram',
        SocialUrlIco: 'https://img.icons8.com/color/48/000000/instagram-new--v1.png',
        SocialColor: '',
        Url: 'https://www.instagram.com/dgazmkt/',
      },
      {
        id: 3,
        SocialName: 'Facebook',
        SocialUrlIco: 'https://img.icons8.com/fluency/48/000000/facebook-new.png',
        SocialColor: '',
        Url: 'https://www.facebook.com/dgazmkt/',
      },
      {
        id: 4,
        SocialName: 'Youtube',
        SocialUrlIco: 'https://img.icons8.com/color/48/000000/youtube-squared.png',
        SocialColor: '',
        Url: 'https://www.youtube.com/c/DgazBr',
      },
    ]
  )

  return (
    <Container source={{
      uri: `https://www.dgaz.com.br/wp-content/uploads/2022/08/fundo_depoimentos.jpg`,
    }}>
      <Section>
        <BoxContent>
          <WebContainer
            source={{ uri: 'https://dgazhomologacao.xyz/app-teste/midia/' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadStart={() => setLoading(true)}
            onLoad={() => setLoading(false)}
          />
        </BoxContent>
        {loading ? <LoaddingElement /> : null}
      </Section>
      <SocialContainer>
        {social.map(data => {
          return (
            <BoxSocial 
              onPress={() => openUrl(data.Url)}
              key={data.id} bgColor={data.SocialColor}>
              <IcoSocial source={{
                uri: `${data.SocialUrlIco}`,
              }} />
            </BoxSocial>
          )
        })}
      </SocialContainer >
    </Container>
  );
}