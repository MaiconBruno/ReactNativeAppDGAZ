import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Section, LogoAPP } from './styles';
import Card from '../../components/card_interface';
import LogoIco from '../../images/icons/dgaz-logo-no-bg.png';
export default ({ navigation }) => {

  function navigateScreens(screenLocate) {
    navigation.navigate(screenLocate);
  }

  const [tabs, setTabs] = useState(
    [
      {
        id: 1,
        title: 'DGAZ Mídias',
        textColor: 'white',
        fontColor: 'white',
        colorBody: '#0BB2D4',
        locate: 'midia',
        content: 'Acesse nosso conteúdo informativo',
        icoURL: 'https://img.icons8.com/avantgarde/100/000000/video-message.png',
      },
      {
        id: 2,
        title: 'Relatórios',
        textColor: 'white',
        fontColor: 'white',
        locate: 'report',
        colorBody: '#0B99D4',
        content: 'Acompanhe seus resultados aqui',
        icoURL: 'https://img.icons8.com/color/48/000000/graph.png',
      },
      {
        id: 3,
        title: 'DGAZ Serviços',
        textColor: 'white',
        fontColor: 'white',
        locate: 'service',
        colorBody: '#0B85D4',
        content: 'Nossos serviços',
        icoURL: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-services-marketing-technology-flaticons-lineal-color-flat-icons.png',
      },
      {
        id: 4,
        title: 'Contato DGAZ',
        textColor: 'white',
        fontColor: 'white',
        locate: 'contact',
        colorBody: '#0B5CD4',
        content: 'Todos os contatos em apenas um toque',
        icoURL: 'https://img.icons8.com/color/48/000000/hang-up-phone.png',
      },
    ]
  )


  return (
    <>
      <Section source={{
        uri: `https://www.dgaz.com.br/wp-content/uploads/2022/08/fundo_depoimentos.jpg`,
      }}
        resizeMode="cover">
        <Container>
          <LogoAPP source={LogoIco} />
          {tabs.map(data => {
            return (
              <Card
                key={`${data.id}`}
                callBackFunction={() => { navigateScreens(data.locate) }}
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