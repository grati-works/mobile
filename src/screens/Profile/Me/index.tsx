import React, { useEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  ButtonSave,
  Container,
  ButtonSaveText,
  Header,
  ProfilePicture,
  ProfilePictureContainer,
  CameraIcon,
  NotificationsWrapper,
  TabMenu,
  MenuOption,
  MenuOptionText,
  UserDataWrapper,
} from "./styles";

import Photo from "../../../assets/icons/photo.svg";

import { Input } from "../../../components/Input";
import { Modalize } from "react-native-modalize";
import { useAuth } from "../../../hooks/auth";

import UserIcon from "../../../assets/icons/profile-input/user.svg";
import UsernameIcon from '../../../assets/icons/profile-input/username.svg';
import EmailIcon from '../../../assets/icons/profile-input/email.svg';
import { NotificationsBell } from "../../../components/NotificationsBell";

import { api } from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ProfileMe() {
  const { user } = useAuth();
  const modalizeNotificationsRef = useRef<Modalize>(null);

  const [profile, setProfile] = useState(null);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState("");

  const handleOpenNotificationsModal = () => {
    modalizeNotificationsRef.current?.open();
  };

  useEffect(() => {
    async function loadProfile() {
      try {
        const organization_id = await AsyncStorage.getItem(
          "@Grati:selected_organization"
        );
  
        const response = await api.get(`/profile/${organization_id}/${user.id}`);
    
        setProfile(response.data);
      } catch(error) {
        console.log(error.response.data)
      }
    }

    loadProfile();
  }, [])

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <ProfilePictureContainer>
              <ProfilePicture source={{ uri: user.profile_picture }} />
              <CameraIcon>
                <Photo width={32} height={32} />
              </CameraIcon>
            </ProfilePictureContainer>

            <NotificationsWrapper>
              <NotificationsBell notifications={[]} onPress={() => {}} />
            </NotificationsWrapper>
          </Header>

          <TabMenu>
            <MenuOption>
              <MenuOptionText selected={true}>Dados</MenuOptionText>
            </MenuOption>
            <MenuOption>
              <MenuOptionText>Trocar senha</MenuOptionText>
            </MenuOption>
          </TabMenu>

          <UserDataWrapper>
            <Input
              placeholder="Nome"
              value={name}
              onChangeText={setName}
              icon={<UserIcon width={30} height={30} />}
              size={53}
            />
            <Input
              placeholder="Usuário"
              value={username}
              onChangeText={setUsername}
              icon={<UsernameIcon width={30} height={30} />}
              size={53}
            />
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              icon={<EmailIcon width={30} height={30} />}
              size={53}
            />
          </UserDataWrapper>

          <ButtonSave>
            <ButtonSaveText>Salvar alterações</ButtonSaveText>
          </ButtonSave>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
