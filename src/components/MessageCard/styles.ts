import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const MessageCardWrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light.background_highlight};
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 4px;
  margin-top: 0px;
`;

export const ReceiverInfoWrapper = styled.View``;

export const TagMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const Tag = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const MessageWrapper = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-top: 17px;
`;

export const ActionsWrapper = styled.View``;

export const Timestamp = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-top: 16px;
  margin-bottom: 7px;
`;

export const Author = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const MessageUserInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserInfoWrapper = styled.View`
`;

export const UserProfilePicture = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  margin-right: 16px;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const UserResponsibility = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
