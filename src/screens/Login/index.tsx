import { Logo } from "../../components/Logo";
import LoginIllustration from "../../assets/images/login_illustration.svg";
import UserIcon from "../../assets/icons/user.svg";
import LockIcon from "../../assets/icons/lock.svg";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContentContainer,
  Header,
  LogoContainer,
  ButtonWrapper,
} from "./styles";

import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export function Login() {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  async function handleSignIn() {
    console.log("AA");
    try {
      const email = "";
      const password = "";

      signIn({ email, password });
    } catch (error) {}
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
              <Input placeholder="Email" icon={<UserIcon />} />
              <Input placeholder="Senha" icon={<LockIcon />} />
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
