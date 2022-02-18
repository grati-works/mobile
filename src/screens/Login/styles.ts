import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
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
  padding: 32px;
`;

export const ButtonWrapper = styled.View`
  margin-top: 16px;
`;