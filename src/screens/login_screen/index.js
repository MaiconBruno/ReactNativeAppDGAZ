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

    function navigateScreens(route) {
        navigation.navigate(route);
    }

    const singUpPage = async (status) => {
       if (status == 200) {
          navigateScreens('app')
       }
       else if (status == 403) {
        return console.log('Login incorreto') 
       }
       else {
        return console.log('Erro') 
       }
    }  
   

    const handleValidadeStatus = async (token) => {
        const statusResponse = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/jwt-auth/v1/token/validate',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        const status = await statusResponse.json();
        singUpPage(status.data.status);

    }

    const setParmsSingUp = async (parms) => {
            setToken(parms.token);
            setUser(parms.user_display_name);
            setEmailUser(parms.user_email);
    }

    const handleAuthentication = async (infoUsername, infopassword) => {
        setParmsSingUp('');
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
          setParmsSingUp(data);
          handleValidadeStatus(token);
    }

    return (
        <>
            <Container>
                <LogoAPP source={LogoIco} />
                <Input value={username} onChangeText={setUsername} keyboardType='string' placeholder='Nome de usuário:' />
                <Input value={password} onChangeText={setPassword} keyboardType='string' secureTextEntry={true} placeholder='Senha:' />
                <LoginButton function={() => { handleAuthentication(username, password);}} nameButton={'Entrar'} />
            </Container>

        </>
    );
}
