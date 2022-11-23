import React, { useState, useEffect } from 'react';
import { Container, Input, LogoAPP } from './styles';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
import LoginButton from '../../components/btn_login';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default ({ navigation }) => {


    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    const [userLogin, setUserLogin] = useState(null);
    const [userPassword, setUserPassword] = useState(null);

    useEffect(() => {
        authUser(userLogin, userPassword);
    });

    const authUser = async (infoUsername, infopassword) => {
        const api = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/jwt-auth/v1/token',
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
            })

        const resp_api = await api.json();
        const _status = api.status;

        if (_status == 200) {
            setUserLogin(infoUsername);
            setUserPassword(infopassword);
            navigation.navigate('app', {
                user_connect: _status,
                user_login: resp_api.user_nicename,
                user_email: resp_api.user_email,
                user_name: resp_api.user_display_name,
                user_token: resp_api.token,
            });
            
        } else if (_status == 403) {
            alert('Usuario e/ou login incorreto, por favor tente novamente.');
        } else {
            console.log('Erro no login codigo: ' + `${_status}`);
        }
    }




    return (
        <>
            <Container>
                <LogoAPP source={LogoIco} />
                <Input value={username} onChangeText={setUsername} keyboardType='string' placeholder='Nome de usuário:' />
                <Input value={password} onChangeText={setPassword} keyboardType='string' secureTextEntry={true} placeholder='Senha:' />
                <LoginButton function={() => { authUser(username, password); }} nameButton={'Entrar'} />
            </Container>

        </>
    );
}
