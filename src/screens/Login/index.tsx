import { Logo } from "../../components/Logo";
import LoginIllustration from "../../assets/images/login_illustration.svg";
import UserIcon from '../../assets/icons/user.svg';
import LockIcon from '../../assets/icons/lock.svg';

import {
    Container,
    ContentContainer,
    Header,
    LogoContainer,
    ButtonWrapper
} from "./styles";

import {
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
  } from 'react-native';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
    return (
        <KeyboardAvoidingView behavior="position" enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <LogoContainer>
                            <Logo mode="dark" size={64} />
                        </LogoContainer>
                        <LoginIllustration />
                    </Header>
                    <ContentContainer>
                        <Input placeholder="Usuário" icon={<UserIcon />}/>
                        <Input placeholder="Senha" icon={<LockIcon />}/>
                        <ButtonWrapper>
                            <Button>Autenticar</Button>
                            <Button type="link" text_align="flex-end">Esqueci minha senha</Button>
                        </ButtonWrapper>
                    </ContentContainer>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}