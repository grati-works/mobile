import React, { useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  ButtonWrapper,
  ButtonText,
  Container,
  Title,
  Text,
  Logo,
  DoneIcon
} from './styles';

import { Button } from '../../components/Button';
import { Home } from '../Home';

export function MessageSent() {
  return (
    <>
      <StatusBar style='dark' backgroundColor='transparent' />
      <Container>
        <DoneIcon />
        <Logo source={'../../assets/icons/logo_fade.png'} />
        <Title>Mensagem enviada!</Title>
        <Text>
          Os usuários @pedrothecatholic, @ga.lucena receberam sua mensagem com
          sucesso!
        </Text>
        <ButtonWrapper>
          <Button>
              <ButtonText>Ok</ButtonText>
          </Button>
        </ButtonWrapper>
      </Container>
    </>
  );
}
