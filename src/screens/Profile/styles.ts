import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const NotificationsContainer = styled.TouchableOpacity``;

export const NotificationIndicator = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button_text};
  width: 20px;
  height: 20px;
  border-radius: 12px;

  text-align: center;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  position: absolute;
  z-index: 10;
  right: -3px;
  top: -3px;
`;

export const ImageView = styled.View`
  display: flex;
  flex-direction: row;

  width: 90%;
  justify-content: center;

  margin-left: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(3)}px;
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;

  border-radius: ${RFValue(150)}px;
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;

  border: none;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.primaryDark};
`;

export const NotBold = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
`;

export const ButtonSave = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 10%;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const ButtonSaveText = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};

  font-size: ${RFValue(20)}px;
`;

export const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 90%;

  margin-top: ${RFPercentage(2)}px;

  border-bottom-width: 0.2px;
  border: none;
`;
