import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  ButtonSaveText,
  ButtonSave,
  Container,
  ImageView,
  ProfilePicture,
  NotificationsContainer,
  NotificationIndicator,
  ButtonView,
  Bold,
  NotBold,
} from './styles';

import BellIcon from '../../assets/icons/bell.svg';
import { Modalize } from 'react-native-modalize';
import { PasswordInput } from '../../components/Profile/PasswordInput';
import { EmailInput } from '../../components/Profile/EmailInput';
import { UserInput } from '../../components/Profile/UserInput';

export function Profile() {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const modalizeNotificationsRef = useRef<Modalize>(null);

  const handleOpenNotificationsModal = () => {
    modalizeNotificationsRef.current?.open();
  };

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <ImageView>
            <ProfilePicture source={{ uri: 'https://imgur.com/random.png' }} />

            <NotificationsContainer onPress={handleOpenNotificationsModal}>
              <NotificationIndicator>2</NotificationIndicator>
              <BellIcon width={36} height={36} />
            </NotificationsContainer>
          </ImageView>

          <ButtonView>
            <NotBold>Dados</NotBold>
            <Bold>Trocar senha</Bold>
          </ButtonView>

          <PasswordInput />

          <ButtonSave>
            <ButtonSaveText>Salvar alterações</ButtonSaveText>
          </ButtonSave>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
