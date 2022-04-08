import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light.background};
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  padding: 30px;
  padding-top: ${20 + getStatusBarHeight()}px;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: ${RFValue(16)}px;
`;

export const CardList = styled.FlatList`
  width: 100%;
  padding: 32px;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
`;

export const GroupList = styled.FlatList`
  width: 100%;
  max-height: 100%;
`;

export const GroupCard = styled.TouchableOpacity`
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