import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const NotificationsContainer = styled.TouchableOpacity``;

export const NotificationIndicator = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.button_text};
  width: 20px;
  height: 20px;
  border-radius: 12px;

  text-align: center;
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  position: absolute;
  z-index: 10;
  right: -3px;
  top: -3px;
`;
