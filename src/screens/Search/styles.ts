import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  min-height: ${RFPercentage(100) + getStatusBarHeight()}px;
`;

export const Margin = styled.View`
  marginBottom: ${RFValue(15)}px;
`;

export const SearchSection = styled.View`
flexDirection: row
align-items: center
width: 100%
borderColor: ${({ theme }) => theme.colors.input.input_border}
borderLeftWidth: 0
borderRightWidth: 0
borderWidth: 1px
padding: 15px
marginBottom: 20px
paddingLeft: 30px
paddingRight: 30px
`;

export const SearchInput = styled.TextInput`
flex: 1
width: 100%
height: 100%
fontFamily: ${({ theme }) => theme.fonts.primary_500}
font-size: ${RFValue(20)}px
`;
