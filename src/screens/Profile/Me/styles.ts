import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  height: ${RFPercentage(100) + getStatusBarHeight()}px;
`;

export const ContentContainer = styled.View`
  
`