import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const SearchSection = styled.View`
  flex-direction: row;
  align-items: center;

  height: ${RFPercentage(10)}px;
  width: 90%;

  border-color: ${({ theme }) => theme.colors.input.input_border};
  border-radius: 5px;
  border-width: 1px;

  padding: ${RFPercentage(2.5)}px;

  margin-bottom: ${RFPercentage(1)}px;
  margin-top: ${RFPercentage(1)}px;
`;

export const HelperSection = styled.View`
  flex: 1;
  flex-direction: column;

  padding-left: ${RFPercentage(3)}px;

  border-left-width: 1px;
  border-color: ${({ theme }) => theme.colors.light.detail};
`;

export const SearchInput = styled.TextInput`
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;
`;

export const UserTag = styled.Text`
  color: ${({ theme }) => theme.colors.placeholder};
`;
