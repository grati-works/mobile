import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export const CardWrapper = styled.View`
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background_highlight};
  width: ${Dimensions.get("window").width}px;
    height: 80px;
`;

export const PositionWrapper = styled.View`
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-right-color: ${({ theme }) => theme.colors.light.background};
  border-right-width: 4px;
`;

export const Position = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(18)}px;

  text-align: center;
  color: #666666;
`;

export const ContentWrapper = styled.View`
  padding: 16px 32px;
  height: 100%;

  flex-direction: row;
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
  margin-right: ${RFValue(10)}px;

  background-color: ${({ theme }) => theme.colors.light.background};
`;

export const UserInfo = styled.View``;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;

export const UserStatus = styled.View`
  width: 70%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Level = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
`;

export const Xp = styled.View`
  flex-direction: row;
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(12)}px;
`;

export const XpView = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(12)}px;
`;
