import React, { useState } from 'react';
import { ContainerTabs, Section, LogoAPP, ContainImg, Ico } from './styles';
// import { useRoute } from '@react-navigation/native';
import Card from '../../components/card_interface';
import LogoIco from '../../images/icons/dgaz-logo-no-bg.png';
import SocialContainer from '../../components/social_bar';

export default ({ navigation }) => {

  function navigateScreens(screenroute) {
    navigation.navigate(screenroute);
  }

  // const route = useRoute();
  // const { user_connect, user_email, user_name, user_token } = route.params;

  const [tabs, setTabs] = useState(
    [
      {
        id: 1,
        title: 'Relatórios',
        textColor: 'white',
        fontColor: 'white',
        route: 'report',
        colorBody: '#0B66D4',
        content: 'Acompanhe seus resultados aqui',
        icoURL: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-dashboard-agile-flaticons-flat-flat-icons-2.png',
      },
      // {
      //   id: 2,
      //   title: 'Financeiro',
      //   textColor: 'white',
      //   fontColor: 'white',
      //   route: '',
      //   colorBody: '#0B77D4',
      //   content: 'Informações sobre pagamento',
      //   icoURL: 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-money-vacation-planning-flaticons-flat-flat-icons.png',
      // },
      {
        id: 3,
        title: 'Videos e rede sociais',
        textColor: 'white',
        fontColor: 'white',
        colorBody: '#0B88Dd',
        route: 'midia',
        content: 'Acesse nosso conteúdo informativo',
        icoURL: 'https://img.icons8.com/fluency/48/null/documentary.png',
      },
      {
        id: 4,
        title: 'Serviços DGAZ',
        textColor: 'white',
        fontColor: 'white',
        colorBody: '#0B99Dd',
        route: 'service',
        content: 'Nossas especializações de atendimento ',
        icoURL: 'https://img.icons8.com/fluency/48/null/online-maintenance-portal.png',
      },
      {
        id: 5,
        title: 'FAQ',
        textColor: 'white',
        fontColor: 'white',
        colorBody: '#0BAADd',
        route: 'faq',
        content: 'Tem alguma duvida ?',
        icoURL: 'https://img.icons8.com/emoji/48/null/question-mark-emoji.png',
      },
      {
        id: 6,
        title: 'Contratos',
        textColor: 'white',
        fontColor: 'white',
        route: 'contract',
        colorBody: '#0BbbDd',
        content: 'Meus Contratos',
        icoURL: 'https://img.icons8.com/color/48/null/key-exchange.png',
      },
      {
        id: 7,
        title: 'Fale Conosco',
        textColor: 'white',
        fontColor: 'white',
        route: 'contact',
        colorBody: '#0BccDd',
        content: 'Todos os contatos em apenas um toque!',
        icoURL: 'https://img.icons8.com/plasticine/100/null/ringer-volume.png',
      },

    ]
  )


  return (
    <>
      <Section>
        <ContainImg>
          <LogoAPP source={LogoIco} />
          <Ico source={{
            uri: `https://img.icons8.com/external-those-icons-flat-those-icons/96/null/external-Arrow-arrows-those-icons-flat-those-icons-46.png`,
          }} />
        </ContainImg>
        <ContainerTabs>
          {tabs.map(data => {
            return (
              <Card
                key={`${data.id}`}
                callBackFunction={() => { navigateScreens(data.route) }}
                textColor={`${data.textColor}`}
                fontColor={`${data.fontColor}`}
                colorBody={`${data.colorBody}`}
                title={`${data.title}`}
                content={`${data.content}`}
                icoURL={`${data.icoURL}`}
              />
            )
          })}
        </ContainerTabs>
      </Section>
      <SocialContainer />
    </>
  );
}