// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

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
import UsernameIcon from "../../../assets/icons/profile-input/username.svg";
import EmailIcon from "../../../assets/icons/profile-input/email.svg";
import LockIcon from "../../../assets/icons/lock.svg";
import { NotificationsBell } from "../../../components/NotificationsBell";

import { api } from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ProfileMe() {
  const { user, updateUser } = useAuth();
  const modalizeNotificationsRef = useRef<Modalize>(null);

  const [profile, setProfile] = useState(null);

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [currentPage, setCurrentPage] = useState("data");

  const handleOpenNotificationsModal = () => {
    modalizeNotificationsRef.current?.open();
  };

  const [profilePicture, setProfilePicture] = useState(null);

  async function handlePickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const { uri } = result;
      setProfilePicture(uri);
      updateUser({ ...user, profile_picture: uri });

      let uriParts = uri.split(".");
      let fileType = uriParts[uriParts.length - 1];

      let formData = new FormData();
      formData.append("avatar", {
        uri,
        name: `avatar.${fileType}`,
        type: `image/${fileType}`,
      });

      await api.patch("/user/avatar", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
    }
  }

  async function handleRemoveImage() {
    setProfilePicture(null);
  }

  useEffect(() => {
    async function loadProfile() {
      try {
        const organization_id = await AsyncStorage.getItem(
          "@Grati:selected_organization"
        );

        const response = await api.get(
          `/profile/${organization_id}/${user.id}`
        );

        setProfile(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }

    setProfilePicture(user.profile_picture);
    loadProfile();
  }, []);

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <ProfilePictureContainer>
              <ProfilePicture source={{ uri: profilePicture }} />
              <CameraIcon onPress={handlePickImage}>
                <Photo width={32} height={32} />
              </CameraIcon>
            </ProfilePictureContainer>

            <NotificationsWrapper>
              <NotificationsBell notifications={[]} onPress={() => {}} />
            </NotificationsWrapper>
          </Header>

          <TabMenu>
            <MenuOption selected={currentPage === "data"} onPress={() => setCurrentPage("data")}>
              <MenuOptionText selected={currentPage === "data"}>
                Dados
              </MenuOptionText>
            </MenuOption>
            <MenuOption selected={currentPage === "switchPassword"} onPress={() => setCurrentPage("switchPassword")}>
              <MenuOptionText selected={currentPage === "switchPassword"}>
                Trocar senha
              </MenuOptionText>
            </MenuOption>
          </TabMenu>

          <UserDataWrapper>
            {currentPage === "data" ? (
              <>
                <Input
                  placeholder="Nome"
                  value={name}
                  onChangeText={setName}
                  icon={<UserIcon width={30} height={30} />}
                />
                <Input
                  placeholder="Usuário"
                  value={username}
                  onChangeText={setUsername}
                  icon={<UsernameIcon width={30} height={30} />}
                />
                <Input
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  icon={<EmailIcon width={30} height={30} />}
                />
              </>
            ) : (
              <>
                <Input
                  placeholder="Senha atual"
                  value={currentPassword}
                  onChangeText={setCurrentPassword}
                  icon={<LockIcon width={30} height={30} />}
                />
                <Input
                  placeholder="Nova senha"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  icon={<LockIcon width={30} height={30} />}
                />
                <Input
                  placeholder="Repetir senha"
                  value={confirmNewPassword}
                  onChangeText={setConfirmNewPassword}
                  icon={<LockIcon width={30} height={30} />}
                />
              </>
            )}
          </UserDataWrapper>

          <ButtonSave>
            <ButtonSaveText>Salvar alterações</ButtonSaveText>
          </ButtonSave>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
