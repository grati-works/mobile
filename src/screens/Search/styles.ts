import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { css } from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
`;

export const Margin = styled.View`
  margin-bottom: ${RFValue(15)}px;
`;

export const SearchSection = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-color: ${({ theme }) => theme.colors.input.input_border};
  border-left-width: 0;
  border-right-width: 0;
  border-width: 1px;
  padding: 15px;
  margin-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
`;
