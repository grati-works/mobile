import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const MessageCardWrapper = styled.View`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.light.background_highlight};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 28px;
`;

export const ReceiverInfoWrapper = styled.View`
`;

export const TagMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const Tag = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
`;

export const MessageWrapper = styled.Text`
  width: 362px;
  color: ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-top: 24px;
  line-height: 22px;
`;

export const ActionsWrapper = styled.View``;

export const Timestamp = styled.Text`
  color: ${({ theme }) => theme.colors.line};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  margin-top: 16px;
  margin-bottom: 7px;
`;

export const Author = styled.Text`
  color: ${({ theme }) => theme.colors.dark.background};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-decoration: underline
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

export const EmojiView = styled.View`
  height: 1px;
  bottom: 64px;
  align-items: flex-end;
`;

export const Line = styled.View`
  width: 368px;
  height: 0.5px;
  bottom: 14px;
  background-color: ${({ theme }) => theme.colors.line};
  border-radius: 3px;
`;

export const LineTop = styled.View`
  width: 368px;
  height: 0.5px;
  right: 68px;
  top: 12px;
  background-color: ${({ theme }) => theme.colors.line};
  border-radius: 3px;
`;
