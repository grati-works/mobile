import { Dimensions } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
const { width, height } = Dimensions.get("window");
import LogoImage from "../../assets/images/logo.svg";

export const BackgroundWrapper = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const PageWrapper = styled.View`
  flex-direction: column;
  width: ${width}px;
  height: ${height}px;

  align-items: center;
  justify-content: flex-start;

  padding-horizontal: 35px;
  margin-top: 100px;
`;

export const PageTitleWrapper = styled.View`
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(LogoImage)``;

export const PageTitle = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  line-height: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${RFPercentage(5)}px;
  margin-top: ${RFPercentage(15)}px;
`;

export const PageDescription = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const NextButtonWrapper = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  margin-top: 80px;
`;

export const NextButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.light.background};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(20)}px;
  margin-top: 2px;
`;

export const PaginationWrapper = styled.View`
  position: absolute;
  bottom: 50px;
  left: 0px;
  right: 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const PaginationDot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 10px;
  opacity: ${({ active }) => (active ? 1 : 0.4)};
`;
