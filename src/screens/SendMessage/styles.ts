import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
  margin-top: ${getStatusBarHeight()}px;
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
  border-radius: 5px;
  padding: 8px 16px;
  margin-right: 12px;
  font-size: ${RFValue(14)}px;
`;

export const ReceiverInput = styled.TextInput`
  height: 36px;
  font-size: ${RFValue(14)}px;
`;

export const MessageInfoWrapper = styled.View``;

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
`;
