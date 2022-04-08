import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background_highlight};

  flex-direction: row;
  padding: 18px;
  border-radius: 10px;
  margin: 10px;
`;

export const ProfilePicture = styled.Image`
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
  margin-right: 10px;
`;

export const NotificationInfo = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;

export const ProfileName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const Description = styled.Text`
font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;
