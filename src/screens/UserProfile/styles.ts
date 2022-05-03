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
  margin-bottom: ${RFValue(10)}px;
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;

  border-radius: ${RFValue(150)}px;
`;

export const KindaBoldText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(22)}px;

  margin-top: ${RFValue(5)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const SubName = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const NormalText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;

export const XpView = styled.View`
  margin-top: ${RFValue(5)}px;

  display: flex;
  flex-direction: row;
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const XpText = styled.Text`
  color: ${({ theme }) => theme.colors.text_detail};

  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;

  margin-left: ${RFValue(3)}px;
  margin-bottom: ${RFValue(5)}px;
`;

export const AboutMe = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const SkillsView = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background_highlight};

  width: ${RFPercentage(54)}px;

  border-radius: 5px;

  margin-top: ${RFValue(10)}px;
  padding: ${RFPercentage(4)}px;
`;
