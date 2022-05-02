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
  ProfilePictureContainer,
  CameraIcon,
  ProfileData,
  ProfilePassword,
} from './styles';

import BellIcon from '../../../assets/icons/bell.svg';
import Photo from '../../../assets/icons/photo.svg';

import { NameInput } from '../../../components/Profile/NameInput';
import { UserInput } from '../../../components/Profile/UserInput';
import { EmailInput } from '../../../components/Profile/EmailInput';
import { Modalize } from 'react-native-modalize';

export function ProfileMe() {
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
            <ProfilePictureContainer>
              <ProfilePicture source={{ uri: 'https://imgur.com/random.png' }} />
              <CameraIcon>
                <Photo width={40} height={40}></Photo>
              </CameraIcon>
            </ProfilePictureContainer>

            <NotificationsContainer onPress={handleOpenNotificationsModal}>
              <NotificationIndicator>3</NotificationIndicator>
              <BellIcon width={36} height={36} />
            </NotificationsContainer>
          </ImageView>

          <ButtonView>
            <ProfileData>
              <Bold>Dados</Bold>
            </ProfileData>
            <ProfilePassword>
              <NotBold>Trocar senha</NotBold>
            </ProfilePassword>
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
