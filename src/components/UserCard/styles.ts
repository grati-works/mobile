import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
`;

export const Row = styled.View`
  borderRadius: 10
  borderWidth: 6
  flexDirection: row
  align-items: center
  borderColor: ${({ theme }) => theme.colors.light.background_highlight}
  backgroundColor: ${({ theme }) => theme.colors.light.background_highlight}
  borderWidth: 12
  width: ${Dimensions.get('window').width}px
`;

export const Pic = styled.Image` 
 borderRadius: 30
  width: 60
  height: 60
`;

export const NameContainer = styled.View` 
  flexDirection: row
  justifyContent: space-between
  width: 325
  `;

export const NameTxt = styled.Text` 
  marginLeft: 15
  fontFamily: ${({ theme }) => theme.fonts.primary_600}
  color: ${({ theme }) => theme.colors.title}
  fontSize: 18
  width:170`;

export const MsgContainer = styled.View`
  flexDirection: row
  alignItems: center
  justifyContent: space-between`;

export const MsgTxt = styled.Text`   
 fontWeight: 400
  color: ${({ theme }) => theme.colors.text}
  fontSize: 12
  marginLeft: 16
  marginTop:3`;

export const Xp = styled.View`
  flexDirection: row
`;

export const XpView = styled.Text`
color: ${({ theme }) => theme.colors.text}
fontFamily: ${({ theme }) => theme.fonts.primary_500}
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ViewHelper = styled.View``;
