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
      colorBody: '#0BB2D4',
      locate: 'midia ',
      content: 'Acesse nossas mídias sociais',
      icoURL: 'https://img.icons8.com/avantgarde/100/000000/video-message.png',
    },
    {
      id: 2,
      title: 'Relatorios',
      textColor: 'white',
      fontColor: 'white',
      locate: 'report',
      colorBody: '#0B99D4',
      content: 'Acesse seus relatorios',
      icoURL: 'https://img.icons8.com/color/48/000000/graph.png',
    },
    {
      id: 3,
      title: 'Serviços',
      textColor: 'white',
      fontColor: 'white',
      locate: 'service',
      colorBody: '#0B85D4',
      content: 'Nossos serviços',
      icoURL: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-services-marketing-technology-flaticons-lineal-color-flat-icons.png',
    },
    {
      id: 4,
      title: 'Contato',
      textColor: 'white',
      fontColor: 'white',
      locate: 'contact',
      colorBody: '#0B5CD4',
      content: 'Entre em contato conosco',
      icoURL: 'https://img.icons8.com/color/48/000000/hang-up-phone.png',
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