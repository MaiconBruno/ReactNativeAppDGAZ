import React, { useState, } from 'react';
import { Container, Section, WebContainer, BoxContent } from './styles';
import LoaddingElement from '../../components/loadding';
import SocialContainer from '../../components/social_bar';

export default ({ navigation }) => {

  function navigateScreens(screenLocate) {
    navigation.navigate(screenLocate);
  }

  const [loading, setLoading] = useState(true);

  return (
    <>
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
      </Container>
      <SocialContainer />
    </>
  );
}