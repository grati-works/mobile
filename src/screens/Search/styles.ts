import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
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
flex: 1
width: 100%
height: 100%
fontFamily: ${({ theme }) => theme.fonts.primary_500}
font-size: ${RFValue(20)}px
`;
