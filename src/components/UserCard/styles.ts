import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(13)}px;
`;

export const Row = styled.View`
  border-radius: 5px;
  border-width: 6px;
  flex-direction: row;
  align-items: center;
  border-color: ${({ theme }) => theme.colors.light.background_highlight};
  background-color: ${({ theme }) => theme.colors.light.background_highlight};
  border-width: 12px;
  width: 100%;
`;

export const Pic = styled.Image`
  border-radius: 30px;
  width: 60px;
  height: 60px;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 35%;
`;

export const NameTxt = styled.Text`
  margin-left: 15px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  width: 170px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LvlTxt = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  margin-left: 16px;
  margin-top: 3px;
`;

export const Xp = styled.View`
  flex-direction: row;
`;

export const XpView = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const XpNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ViewHelper = styled.View``;
