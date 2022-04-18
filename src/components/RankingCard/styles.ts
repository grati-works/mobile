import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Container = styled.View`
width: 80%
flexDirection: row
align-items: center
background-color: ${({ theme }) => theme.colors.light.background}
`;

export const Rank = styled.View`
borderRadius: 10px
borderWidth: 6px
borderColor: ${({ theme }) => theme.colors.light.background_highlight}
backgroundColor: ${({ theme }) => theme.colors.light.background_highlight}
height: 100%
width: 25%
align-items: center
display: flex
justify-content: center
`;

export const Text = styled.Text`
fontFamily: ${({ theme }) => theme.fonts.primary_600}
color: ${({ theme }) => theme.colors.text}
font-size: ${RFValue(20)}
`;
