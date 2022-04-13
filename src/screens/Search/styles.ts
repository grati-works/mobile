import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  min-height: ${RFPercentage(100) + getStatusBarHeight()}px;
`;

export const SearchInput = styled.TextInput`
  padding: 0 32px;
  fontFamily: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  borderBottomWidth: 1px;
  borderTopWidth: 1px;
  borderColor: ${({theme}) => theme.colors.transparent_black};
  padding: ${RFValue(15)}px;
  `;
  
export const Margin = styled.View`
marginBottom:  ${RFValue(15)}px
`;