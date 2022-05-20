import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const NotificationsContainer = styled.TouchableOpacity``;

export const NotificationIndicatorWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 20px;
  border-radius: 12px;

  position: absolute;
  z-index: 10;
  right: -3px;
  top: -3px;

  justify-content: center;
  align-items: center;
`;

export const NotificationIndicatorText = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};

  text-align: center;
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;
