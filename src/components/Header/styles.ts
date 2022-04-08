import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};

  flex-direction: row;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + RFValue(10)}px;
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
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  position: absolute;
  z-index: 10;
  right: -3px;
  top: -3px;
`;

export const ProfileContainer = styled.TouchableOpacity`
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