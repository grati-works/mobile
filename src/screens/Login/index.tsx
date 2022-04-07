import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import {
  Container,
  ContentContainer,
  Header,
  LogoContainer,
  ButtonWrapper,
  Title,
} from "./styles";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Logo } from "../../components/Logo";
import LoginIllustration from "../../assets/images/login_illustration.svg";
import UserIcon from "../../assets/icons/user.svg";
import LockIcon from "../../assets/icons/lock.svg";

export function Login() {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("erick.capito@hotmail.com");
  const [password, setPassword] = useState("12345678Teste!");

  async function handleSignIn() {
    try {
      const user = await signIn({ email, password });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRecoverPassword() {
    navigation.navigate("RecoverPassword");
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <Title>Acessar conta</Title>
              <Input
                placeholder="Email"
                icon={<UserIcon />}
                value={email}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Senha"
                icon={<LockIcon />}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <ButtonWrapper>
                <Button onPress={handleSignIn}>Autenticar</Button>
                <Button
                  type="link"
                  text_align="flex-end"
                  onPress={handleRecoverPassword}
                >
                  Esqueci minha senha
                </Button>
              </ButtonWrapper>
            </ContentContainer>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
