import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const GroupCardWrapper = styled(RectButton)`
  padding: 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.light.background_highlight};
  margin-top: 16px;
`;

export const GroupColor = styled.View`
  height: 14px;
  background-color: ${({ color }) => color};
  border-radius: 2px;
  margin-bottom: 12px;
`;

export const GroupName = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
`;