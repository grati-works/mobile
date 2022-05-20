import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};

  flex-direction: row;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + RFValue(10)}px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const ProfileContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
`;

export const ProfileName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
  margin-left: ${RFValue(10)}px;
`;

export const ActionInfo = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(8)}px;
  text-align: center;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ActionButton = styled.TouchableOpacity`
  width: 95%;
  height: 80px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  margin-left: 2.5%;
  margin-bottom: 3%;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.button_text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
`;
