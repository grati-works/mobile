import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Row = styled.View`
  borderRadius: 5px
  borderWidth: 6px
  flexDirection: row
  align-items: center
  borderColor: ${({ theme }) => theme.colors.light.background_highlight}
  backgroundColor: ${({ theme }) => theme.colors.light.background_highlight}
  borderWidth: 12px
  width: 100%;
`;

export const Pic = styled.Image` 
  borderRadius: 30px
  width: 60px
  height: 60px
`;

export const NameContainer = styled.View` 
  flexDirection: row
  justifyContent: space-between
`;

export const NameTxt = styled.Text`
  marginLeft: 15px
  fontFamily: ${({ theme }) => theme.fonts.primary_600}
  color: ${({ theme }) => theme.colors.title}
  font-size: ${RFValue(20)}px;
  width: 60%
`;

export const InfoContainer = styled.View`
  flexDirection: row
  alignItems: center
  justifyContent: space-between
`;

export const LvlTxt = styled.Text` 
  color: ${({ theme }) => theme.colors.text}
  fontSize: 12px
  marginLeft: 16px
  marginTop: 3px
`;

export const Xp = styled.View`
  flexDirection: row;
`;

export const XpView = styled.Text`
  color: ${({ theme }) => theme.colors.text}
  fontFamily: ${({ theme }) => theme.fonts.primary_500}
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ViewHelper = styled.View``;

export const Container = styled.View`
width: 100%
height: ${RFPercentage(13)}px;
flexDirection: row
align-items: center
margin: 2px 0
`;

export const Rank = styled.View`
backgroundColor: ${({ theme }) => theme.colors.light.background_highlight}
borderRadius: 5px
height: 100%
width: 10%
align-items: center
justify-content: center
margin-left: 2px;
`;

export const RankingNumber = styled.Text`
fontFamily: ${({ theme }) => theme.fonts.primary_600}
color: ${({ theme }) => theme.colors.text}
`;
