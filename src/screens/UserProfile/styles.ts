import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background};

  align-items: center;

  padding-horizontal: ${RFPercentage(3)}px;
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const ProfilePictureContainer = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  margin-bottom: ${getStatusBarHeight()}px;
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;

  border-radius: ${RFValue(150)}px;
`;

export const KindaBoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;

  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const NormalText = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Function = styled.Text``;

export const XpView = styled.View`
  margin-top: ${RFValue(5)}px;

  display: flex;
  flex-direction: row;
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const XpText = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  margin-left: ${RFValue(3)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const AboutMe = styled.View``;

export const SkillsView = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background_highlight};

  width: ${RFPercentage(54)}px;

  border-radius: 5px;

  margin-top: ${RFValue(5)}px;
  padding: ${RFPercentage(2)}px;
`;
