import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  ButtonSave,
  Container,
  ButtonSaveText,
  ButtonView,
  Bold,
  NotBold,
  ImageView,
  ProfilePicture,
  NotificationsContainer,
  NotificationIndicator,
} from './styles';

import BellIcon from '../../assets/icons/bell.svg';
import { NameInput } from '../../components/Profile/NameInput';
import { UserInput } from '../../components/Profile/UserInput';
import { EmailInput } from '../../components/Profile/EmailInput';
import { Modalize } from 'react-native-modalize';

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
              <NotificationIndicator>3</NotificationIndicator>
              <BellIcon width={36} height={36} />
            </NotificationsContainer>
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
