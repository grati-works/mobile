import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { css } from 'styled-components';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background};

  margin-top: ${getStatusBarHeight() - 20 + (Platform.OS == 'ios' ? 20 : 0)}px;
  // margin-top: ${getStatusBarHeight()}px;
  padding-horizontal: ${RFPercentage(5)}px;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: center;
  margin-top: 50px;
`;

export const ProfilePictureContainer = styled.View``;

export const ProfilePicture = styled.Image`
  width: ${RFValue(162)}px;
  height: ${RFValue(162)}px;

  border-radius: ${RFValue(150)}px;
`;

export const CameraIcon = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 2px;

  position: absolute;
  left: ${RFValue(116)}px;
  top: ${RFValue(116)}px;
`;

export const NotificationsWrapper = styled.View`
  position: absolute;
  right: ${RFValue(10)}px;
  top: -${RFValue(10)}px;
`;

export const TabMenu = styled.View`
  width: 100%;

  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.light.detail_contrast};

  margin-top: 32px;
`;

export const MenuOption = styled(RectButton)`
  width: 50%;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.light.background};
`;

export const MenuOptionText = styled.Text`
  width: 100%;

  font-family: ${({ theme, selected }) => theme.fonts[selected ? 'primary_600' : 'primary_400']};
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme, selected }) => (selected ? theme.colors.title : theme.colors.text)};

  padding-bottom: 10px;
`;

export const UserDataWrapper = styled.View`
  margin-top: ${RFValue(20)}px;
`;

export const ButtonSave = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 53px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.primaryLight};
`;

export const ButtonSaveText = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
`;

export const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  width: 100%;

  border-bottom-width: 0.2px;
  border: none;
`;
