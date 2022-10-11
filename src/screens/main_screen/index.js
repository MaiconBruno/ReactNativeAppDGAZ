import React from 'react';
import { Text } from 'react-native';
import { Container, Section } from './styles';
import Card from '../../components/card_interface';

export default ({ navigation }) => {

  function navigateScreens(screenLocate) {
    navigation.navigate(screenLocate);
  }

  const tabs = [
    {
      id: 1,
      title: 'Nossas Mídias',
      textColor: 'white',
      fontColor: 'white',
      colorBody: '#4CB2FC',
      locate: 'mediaScreen',
      content: 'Acesse nossas mídias sociais',
      icoURL: 'https://img.icons8.com/plasticine/100/000000/youtube-play--v2.png',
    },
    {
      id: 2,
      title: 'Relatorios',
      textColor: 'white',
      fontColor: 'white',
      locate: '',
      colorBody: '#2FD476',
      content: 'Acesse seus relatorios',
      icoURL: 'https://img.icons8.com/plasticine/100/000000/youtube-play--v2.png',
    },
    {
      id: 3,
      title: 'Contato',
      textColor: 'white',
      fontColor: 'white',
      locate: '',
      colorBody: '#7950E6',
      content: 'Entre em contato conosco',
      icoURL: 'https://img.icons8.com/plasticine/100/000000/youtube-play--v2.png',
    },
  ]


  return (
    <>
      <Section source={{
        uri: `https://www.dgaz.com.br/wp-content/uploads/2022/08/fundo_depoimentos.jpg`,
      }}
        resizeMode="cover">
        <Container>
          {tabs.map(data => {
            return(
              <Card
              key={`${data.id}`}
              callBackFunction={() => {navigateScreens(data.locate)}}
              textColor={`${data.textColor}`}
              fontColor={`${data.fontColor}`}
              colorBody={`${data.colorBody}`}
              title={`${data.title}`}
              content={`${data.content}`}
              icoURL={`${data.icoURL}`}
            />
            )  
          })}
        </Container>
      </Section>
    </>
  );
}