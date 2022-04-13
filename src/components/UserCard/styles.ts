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
  borderRadius: 10px
  borderWidth: 6px
  flexDirection: row
  align-items: center
  borderColor: ${({ theme }) => theme.colors.light.background_highlight}
  backgroundColor: ${({ theme }) => theme.colors.light.background_highlight}
  borderWidth: 12px
  width: ${Dimensions.get('window').width}px
`;

export const Pic = styled.Image` 
  borderRadius: 30px
  width: 60px
  height: 60px
`;

export const NameContainer = styled.View` 
  flexDirection: row
  justifyContent: space-between
  width: 325px
  `;

export const NameTxt = styled.Text` 
  marginLeft: 15px
  fontFamily: ${({ theme }) => theme.fonts.primary_600}
  color: ${({ theme }) => theme.colors.title}
  fontSize: 18px
  width:170px`;

export const InfoContainer = styled.View`
  flexDirection: row
  alignItems: center
  justifyContent: space-between`;

export const LvlTxt = styled.Text` 
  color: ${({ theme }) => theme.colors.text}
  fontSize: 12px
  marginLeft: 16px
  marginTop: 3px`;

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
