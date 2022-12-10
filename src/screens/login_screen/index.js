import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Input, LogoAPP } from './styles';
import LogoIco from '../../images/icons/dgaz_logo.jpg';
import LoginButton from '../../components/btn_login';
import LoaddingElement from '../../components/loadding';
import { useFocusEffect } from '@react-navigation/native';

export default ({ navigation }) => {

    // Variaveis que armazena os dados inseridos nos inputs login e senha. 
    // Não tem nenhuma utilidade de consulta, serve apenas para manipular estado. 
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [loginScreenState, setScreen_LoginState] = useState(true);

    // Faz a consulta na API para validar o Token. 
    const validTokenSingIn = async (token) => {
        try {
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
            // const data = await statusResponse.json();

            //retorna o estado da requisição e armazena 
            //(200 sucesso) (403 falha) 
            const resp_token = statusResponse.status;
            if (resp_token == 200) {
                const _email = await AsyncStorage.getItem('@userEmail');
                const _userName = await AsyncStorage.getItem('@userName');
                const _token = await AsyncStorage.getItem('@tokenCode');
                console.log('Token valido...')
                navigation.navigate('app', {
                    user_connect: resp_token,
                    user_email: _email,
                    user_name: _userName,
                    user_token: _token,
                });
            } else if (resp_token == 403) {
                console.log('Token invalido...')
                await AsyncStorage.removeItem('@tokenCode');
                await AsyncStorage.removeItem('@userName');
                await AsyncStorage.removeItem('@userEmail');
                setScreen_LoginState(false);
            } else {
                console.log('Falha ao consultar o token: ' + resp_token)
                setScreen_LoginState(false);
            }
        } catch (e) {
            console.log(e);
        }
    }

    // Faz a leitura do token salvo no localstorage é executada através do 
    // UseEffect sempre que a aplicação recebe alguma mudança de estado. 
    const scanToken = async () => {
        try {
            const _token = await AsyncStorage.getItem('@tokenCode');
            if (_token != null || _token != '') {
                validTokenSingIn(_token);
            } else {
                alert('Bem vindo APP DGAZ')
            }
        } catch (e) {
            console.log(e);
        }
    }

    useFocusEffect(
        () => {
            scanToken();
        }
    );

    const authUser = async (infoUsername, infopassword) => {
        try {
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
                await AsyncStorage.setItem('@userName', resp_api.user_display_name);
                await AsyncStorage.setItem('@tokenCode', resp_api.token);
                await AsyncStorage.setItem('@userEmail', resp_api.user_email);
                setScreen_LoginState(true);
                navigation.navigate('app', {
                    user_connect: _status,
                    user_email: resp_api.user_email,
                    user_name: resp_api.user_display_name,
                    user_token: resp_api.token,
                });

            } else if (_status == 403) {
                alert('Usuario e/ou login incorreto, por favor tente novamente.');
                setScreen_LoginState(false);
                await AsyncStorage.removeItem('@tokenCode');
                await AsyncStorage.removeItem('@userName');
                await AsyncStorage.removeItem('@userEmail');
            } else {
                setScreen_LoginState(false);
                console.log('Erro no login codigo: ' + `${_status}`);
            }
        } catch (e) {

        }
    }

    return (
        <>
            {loginScreenState ?
                <LoaddingElement /> : <Container><LogoAPP source={LogoIco} />
                    <Input value={username} onChangeText={setUsername} keyboardType='string' placeholder='Nome de usuário:' />
                    <Input value={password} onChangeText={setPassword} keyboardType='string' secureTextEntry={true} placeholder='Senha:' />
                    <LoginButton function={() => { authUser(username, password); }} nameButton={'Entrar'} />
                </Container>}
        </>
    );
}
