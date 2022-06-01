import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Animated } from 'react-native';

export const Container = styled.View`
  align-items: center;
  position: absolute;

  bottom: 28px;
  right: 25px;

  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
`;

export const button = styled.Animated.View`


  position: absolute;
  width: 60;
  height: 60;
  border-radius: 30;
  justify-content: center;
  align-items: center;
  shadow-radius: 10;
  shadow-color: #00213B;
  shadow-opacity: 0.3;
  shadow-offset: {
      height: 10
  }
`;

export const menu = styled.View`
  background-color: #00213b;
`;
