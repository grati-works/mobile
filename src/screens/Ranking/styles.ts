import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  height: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight() - 78}px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 12px;
`;

export const EmptyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};
`;
