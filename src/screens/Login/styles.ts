import styled from 'styled-components/native';
import LoginIllustration from "../../assets/images/login_illustration.svg";

export const Container = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 30px;
`;

export const LogoContainer = styled.View`
  width: 100%;
  margin-bottom: -15px;
`;