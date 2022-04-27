import React, { useEffect, useState } from 'react';
import {
  ButtonSave,
  Container,
  ButtonSaveText,
  ButtonView,
  Bold,
  NotBold,
  ImageView,
  ProfilePicture,
} from './styles';

import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { NameInput } from '../../components/Profile/NameInput';
import { UserInput } from '../../components/Profile/UserInput';
import { EmailInput } from '../../components/Profile/EmailInput';

export function Profile() {
  const navigation = useNavigation();
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ImageView>
            <ProfilePicture source={{ uri: 'https://imgur.com/random.png' }} />
          </ImageView>

          <ButtonView>
            <Bold>Dados</Bold>
            <NotBold>Trocar senha</NotBold>
          </ButtonView>

          <NameInput />
          <UserInput />
          <EmailInput />

          <ButtonSave>
            <ButtonSaveText>Salvar alterações</ButtonSaveText>
          </ButtonSave>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
