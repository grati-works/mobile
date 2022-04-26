import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
  margin-top: ${getStatusBarHeight()}px;
`;

export const ImageView = styled.View`
display: flex;
flexDirection: row;
marginTop: ${RFPercentage(10)}px;
`;

export const ProfilePicture = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  border-radius: ${RFValue(150)}px;
`;

export const Bold = styled.Text`
  fontFamily: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(20)}px;

  border: none;
  borderBottomWidth: 3px;
  borderColor: ${({ theme }) => theme.colors.primaryDark};
`;

export const NotBold = styled.Text`
  fontFamily: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(20)}px;
`;

export const ButtonSave = styled.TouchableOpacity`
  backgroundColor: ${({ theme }) => theme.colors.primaryLight};
  padding: 10px;
  width: 90%;
  alignItems: center;
  height: 10%;
  borderRadius: 5px;
  display: flex;
  justify-content: center;
`;

export const ButtonSaveText = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};
  font-size: ${RFValue(20)}px;
`;

export const ButtonView = styled.View`
  display: flex; 
  flexDirection: row;
  justify-content: space-evenly;

  marginTop: 20px

  borderBottomWidth: 0.2px;
  width: 90%;
  border: none;
`;
