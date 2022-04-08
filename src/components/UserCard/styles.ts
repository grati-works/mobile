import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
`;

export const Texto = styled.Text`
  text-align: center;
`;

export const Row = styled.View`
  flexDirection: row
  align-items: center
  borderColor: #DCDCDC
  backgroundColor: #fff
  
`;

export const Padding = styled.View`
  borderWidth: 0;
`;

export const Pic = styled.Image` 
 borderRadius: 30
  width: 60
  height: 60
`;

export const NameContainer = styled.View` 
  flexDirection: row
  justifyContent: space-between
  width: 280
  `;

export const NameTxt = styled.Text` 
  marginLeft: 15
  fontWeight: 600
  color: #222
  fontSize: 18
  width:170`;

export const MsgContainer = styled.View`
  flexDirection: row
  alignItems: center
  justifyContent: space-between`;

export const MsgTxt = styled.Text`   
 fontWeight: 400
  color: #008B8B
  fontSize: 12
  marginLeft: 15`;

export const XpView = styled.Text``;

export const ViewHelper = styled.View``;
