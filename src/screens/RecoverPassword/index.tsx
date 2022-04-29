import React from 'react';
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
    Keyboard
} from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function RecoverPassword() {
    const navigation = useNavigation();
    function handleRememberPassword() {
        navigation.navigate("Login");
    }
    return (
        <KeyboardAvoidingView behavior='position' enabled>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
            <Header>
                <LogoContainer>
                <Logo mode='dark' size={64} />
                </LogoContainer>
                <LoginIllustration />
            </Header>
            <ContentContainer>
                <Title>Recuperar senha</Title>
                <Input placeholder='Email' icon={<UserIcon />} />
                <ButtonWrapper>
                <Button>Enviar e-mail de recuperação</Button>
                <Button type='link' text_align='flex-end' onPress={handleRememberPassword}>
                    Lembro-me de minha senha
                </Button>
                </ButtonWrapper>
            </ContentContainer>
            </Container>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}
