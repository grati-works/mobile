import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background};

  ${({ keyboardIsVisible, keyboardHeight, theme }) =>
    keyboardIsVisible
      ? css`
          height: ${RFPercentage(100) - keyboardHeight - 70}px;
          margin-top: ${keyboardHeight + getStatusBarHeight() - 48}px;
        `
      : css`
          height: ${RFPercentage(100) - 48}px;
          margin-top: ${getStatusBarHeight()}px;
        `};
`;

export const ReceiversUsernamesWrapper = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.light.detail};

  display: flex;
  flex-direction: row;
  padding: 16px 32px;

  flex-wrap: wrap;
`;

export const ReceiverUsername = styled.Text`
  background-color: ${({ theme }) => theme.colors.light.detail};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  border-radius: 5px;
  padding: 8px 16px;
  margin-right: 12px;
  font-size: ${RFValue(14)}px;
`;

export const ReceiverInput = styled.TextInput`
  flex: 1;
  height: 36px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const TagInput = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const MessageInfoWrapper = styled.ScrollView``;

export const TagsWrapper = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  padding: 16px 32px;

  flex-wrap: wrap;
`;

export const Tag = styled.View`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.light.detail};
  border-radius: 5px;
  margin-right: 12px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TagIconWrapper = styled.View`
  width: 48px;
  height: 48px;

  border-right-color: ${({ theme }) => theme.colors.placeholder};
  border-right-width: 1px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TagIcon = styled.Text``;

export const TagName = styled.Text`
  font-size: ${RFValue(14)}px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const TextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 32px;
  font-size: ${RFValue(14)}px;
  max-width: 100%;
`;

export const FooterWrapper = styled.View`
  padding: 0 32px;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: row;

  margin-bottom: ${getStatusBarHeight() + 10}px;
`;

export const AttachButton = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.light.detail};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
`;

export const SendButton = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 9%;
`;
