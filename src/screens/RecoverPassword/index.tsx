import React, { useState } from 'react';
import { Logo } from '../../components/Logo';
import LoginIllustration from '../../assets/images/login_illustration.svg';
import UserIcon from '../../assets/icons/user.svg';
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    ContentContainer,
    Header,
    LogoContainer,
    ButtonWrapper,
    Title
} from './styles';

import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ToastAndroid
} from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function RecoverPassword() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('erick.capito@hotmail.com');
    
    function handleRememberPassword() {
        navigation.navigate("Login");
    }

    async function handleRecoverPassword() {
        console.log(email)
        await api.post('password/forgot', {
            email
        });

        navigation.navigate("Login");
        ToastAndroid.show("Um e-mail de recuperação foi enviado!", ToastAndroid.LONG);
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <GestureHandlerRootView>
                <Header>
                    <LogoContainer>
                    <Logo mode='dark' size={64} />
                    </LogoContainer>
                    <LoginIllustration />
                </Header>
                <ContentContainer>
                    <Title>Recuperar senha</Title>
                    <Input placeholder='Email' icon={<UserIcon />} value={email} onChangeText={setEmail}/>
                    <ButtonWrapper>
                    <Button onPress={handleRecoverPassword}>Enviar e-mail de recuperação</Button>
                    <Button type='link' text_align='flex-end' onPress={handleRememberPassword}>
                        Lembro-me de minha senha
                    </Button>
                    </ButtonWrapper>
                </ContentContainer>
                </GestureHandlerRootView>
            </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
