import React, { useEffect, useState, useRef } from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  AboutMe,
  Container,
  KindaBoldText,
  NormalText,
  ProfilePicture,
  ProfilePictureContainer,
  SkillsView,
  XpNumber,
  XpText,
  XpView,
} from './styles';
import { Modalize } from 'react-native-modalize';

export function UserProfile() {
  const navigation = useNavigation();
  const [state, setState] = useState();
  const modalizeNotificationsRef = useRef<Modalize>(null);

  useEffect(() => {}, []);

  return (
    <Container>
      <ProfilePictureContainer>
        <ProfilePicture source={{ uri: 'https://imgur.com/random.png' }} />
      </ProfilePictureContainer>

      <KindaBoldText>César Lattes</KindaBoldText>

      <NormalText>Méson π+</NormalText>

      <XpView>
        <XpNumber>9999</XpNumber>
        <XpText>xp</XpText>
      </XpView>

      <AboutMe>
        <KindaBoldText>Sobre mim</KindaBoldText>
        <NormalText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi officia, consectetur
          assumenda eveniet soluta deserunt saepe facilis et architecto obcaecati enim ut aliquid
          voluptate rem numquam sit facere, inventore ipsum?
        </NormalText>
      </AboutMe>

      <SkillsView>
        <KindaBoldText>Skills</KindaBoldText>
        <NormalText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi officia, consectetur
          assumenda eveniet soluta deserunt saepe facilis et architecto obcaecati enim ut aliquid
          voluptate rem numquam sit facere, inventore ipsum?
        </NormalText>
      </SkillsView>
    </Container>
  );
}
