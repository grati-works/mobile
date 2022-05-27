import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.KeyboardAvoidingView`
  background-color: ${({ theme }) => theme.colors.light.background};
  margin-bottom: 50px;
`;

export const Header = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? 290 : 284}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 30px;
  padding-top: ${20 + getStatusBarHeight()}px;
  margin-bottom: 35%;
`;

export const LogoContainer = styled.View`
  width: 100%;
  margin-bottom: -15px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  padding: 10px 32px;
  background-color: ${({ theme }) => theme.colors.light.background};
  margin-bottom: 100%;

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(20)}px;
  margin-bottom: 15px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;
