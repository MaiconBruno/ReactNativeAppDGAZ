import React, { useState } from 'react';
import { Container, Input, LogoAPP } from './styles';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
import LoginButton from '../../components/btn_login';

export default ({ navigation }) => {

    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);

    function openSection() {
        navigation.navigate('app');
    }

    return (
        <>
            <Container>
                <LogoAPP source={LogoIco} />
                <Input value={user} onChangeText={setUser} keyboardType='string' placeholder='Nome de usuário:' />
                <Input value={password} onChangeText={setPassword} keyboardType='string' secureTextEntry={true} placeholder='Senha:' />
                <LoginButton function={() => {openSection();}} nameButton={'Entrar'} />
            </Container>
        </>
    );
}
