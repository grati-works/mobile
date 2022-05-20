import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const ScrollView = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.light.background};

  padding-horizontal: ${RFPercentage(3)}px;
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const Container = styled.View`
  align-items: center;
`;

export const ProfilePictureContainer = styled.View`
  margin-top: ${getStatusBarHeight() + 20}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(162)}px;
  height: ${RFValue(162)}px;

  border-radius: ${RFValue(150)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(20)}px;
`;

export const UserResponsibiliy = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(18)}px;
  margin-bottom: 12px;
`;

export const SubName = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const NormalText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const XpView = styled.View`
  margin-top: ${RFValue(5)}px;

  display: flex;
  flex-direction: row;
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const XpText = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;

  margin-left: ${RFValue(3)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const AboutMe = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const SectionWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background_highlight};

  width: 100%;

  border-radius: 5px;

  margin: 16px 32px;
  padding: ${RFPercentage(4)}px;
`;

export const SocialMediaWidget = styled.TouchableOpacity`
  position: absolute;
  bottom: 28px;
  right: 25px;

  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
`