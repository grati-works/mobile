import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const SearchSection = styled.View`
  flexDirection: row;
  alignItems: center;

  height: ${RFPercentage(10)}px;
  width: 90%;

  borderColor: ${({ theme }) => theme.colors.input_border};
  borderRadius: 5px;
  borderWidth: 1px;

  padding: ${RFPercentage(2.5)}px;

  marginBottom: ${RFPercentage(1)}px;
  marginTop: ${RFPercentage(1)}px;
`;

export const HelperSection = styled.View`
  flex: 1;
  flexDirection: column;

  paddingLeft:  ${RFPercentage(3)}px;

  borderLeftWidth: 1px;
  borderColor: ${({ theme }) => theme.colors.light.detail};
`;

export const SearchInput = styled.TextInput`
  width: 100%;

  fontFamily: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;
`;

export const UserTag = styled.Text`
  color: ${({ theme }) => theme.colors.placeholder};
`;