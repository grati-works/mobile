import styled, { css } from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions, Platform } from "react-native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100)}px;
  margin-top: ${getStatusBarHeight() + (Platform.OS == "ios" ? 20 : 0)}px;
`;

export const ReceiversUsernamesWrapper = styled.View`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.light.detail};

  display: flex;
  flex-direction: row;
  padding: 16px 32px;

  flex-wrap: wrap;
`;

export const ReceiverUsernameButton = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.light.detail};
  border-radius: 5px;
  padding: 8px 16px;
  margin-right: 12px;
  margin-bottom: 6px;
`;

export const ReceiverUsername = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ReceiverInput = styled.TextInput`
  flex: 1;
  height: 36px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;

export const TagInput = styled.TextInput`
  flex: 1;
  height: 48px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.title};
`;

export const MessageInfoWrapper = styled.ScrollView``;

export const TagsWrapper = styled.View`
  width: 100%;

  display: flex;
  flex-direction: row;
  padding: 16px 32px;

  flex-wrap: wrap;
`;

export const Tag = styled(RectButton)`
  height: 48px;
  background-color: ${({ theme }) => theme.colors.light.detail};
  border-radius: 5px;
  margin-right: 12px;
  margin-bottom: 8px;

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
  min-height: ${Dimensions.get("window").height * 0.2}px;
  margin: auto;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(14)}px;
  width: 85%;

  text-align-vertical: top;
`;

export const FooterWrapper = styled.View`
  width: 100%;
  padding: 0 32px;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: row;

  margin-bottom: ${getStatusBarHeight() + Platform.OS === "ios" ? 80 : 120}px;
`;

export const AttachButton = styled(RectButton)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.light.detail};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  ${({ theme, attached }) =>
    attached &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.primary};
    `}
`;

export const AttachedImage = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 5px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.primary};
`;

export const SendButton = styled(RectButton)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 32px;
  bottom: 0;
`;
