import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Done from '../../assets/icons/done.svg';

export const Container = styled.View`
  flex: 1;
`;

export const Logo = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 350px;
  top: ${RFPercentage(8)}px;
  bottom: ${RFPercentage(5)}px;
  display: flex;
  position: absolute;
`;

export const DoneIcon = styled(Done)`
  display: flex;
  top: ${RFPercentage(54)}px;
  left: ${RFPercentage(26)}px;
`;

export const Title = styled.Text`
  top: ${RFPercentage(58)}px;
  bottom: ${RFPercentage(5)}px;
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.primary_600};
  text-align: center;
  line-height: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.Text`
  width: 260px;
  height: 78px;
  top: ${RFPercentage(60.5)}px;
  align-items: center;
  justify-content: center;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  text-align: center;
  line-height: ${RFValue(25)}px;
  margin-left: 76px;
  color: ${({ theme }) => theme.colors.dark.background};
`;

export const ButtonWrapper = styled.View`
  width: ${RFPercentage(11)}px;
  top: ${RFPercentage(74)}px;
  left: ${RFPercentage(23)}px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.primary_500};
  text-align: center;
`;
