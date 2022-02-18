import { Logo } from "../../components/Logo";
import LoginIllustration from "../../assets/images/login_illustration.svg";

import {
    Container,
    Header,
    LogoContainer
} from "./styles";

export function Login() {
    return (
        <Container>
            <Header>
                <LogoContainer>
                    <Logo mode="dark" size={64} />
                </LogoContainer>
                <LoginIllustration />
            </Header>
        </Container>
    )
}