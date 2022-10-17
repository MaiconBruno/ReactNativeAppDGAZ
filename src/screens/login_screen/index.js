import React, { useState, useEffect } from 'react';
import { Container, Input, LogoAPP } from './styles';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
import LoginButton from '../../components/btn_login';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default ({ navigation }) => {


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [emailUser, setEmailUser] = useState(null);
    const [statusConect, setStatusConect] = useState(null);

    const handleAuthentication = async (infoUsername, infopassword) => {
        const response = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/jwt-auth/v1/token',
            {
                method: 'POST',
                headers: {
                    Accept: 'aplication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: infoUsername,
                    password: infopassword,
                })
            });
        const data = await response.json();
        console.log(data);
        setToken(data.token);
        setUser(data.user_display_name);
        setEmailUser(data.user_email);
        
        console.log('-------------------------')
        console.log('Token: ' + token)
        console.log('Usuario: ' + user)
        console.log('Email: ' +emailUser)
    }

    return (
        <>
            <Container>
                <LogoAPP source={LogoIco} />
                <Input value={username} onChangeText={setUsername} keyboardType='string' placeholder='Nome de usuário:' />
                <Input value={password} onChangeText={setPassword} keyboardType='string' secureTextEntry={true} placeholder='Senha:' />
                <LoginButton function={() => { handleAuthentication(username, password); }} nameButton={'Entrar'} />
            </Container>

        </>
    );
}
