// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ToastAndroid,
} from "react-native";
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

import UserIcon from "../../../assets/icons/username.svg";
import UsernameIcon from "../../../assets/icons/user.svg";
import EmailIcon from "../../../assets/icons/message.svg";
import LockIcon from "../../../assets/icons/lock.svg";
import { NotificationsBell } from "../../../components/NotificationsBell";

import { useKeyboard } from "@react-native-community/hooks";
import { api } from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import theme from "../../../styles/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NotificationCard } from "../../../components/NotificationCard";

export function ProfileMe() {
  const { user, updateUser } = useAuth();

  const [profile, setProfile] = useState(null);

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [currentPage, setCurrentPage] = useState("data");

  const [notifications, setNotifications] = useState([]);
  const modalizeNotificationsRef = useRef<Modalize>(null);
  const handleOpenNotificationsModal = () => {
    modalizeNotificationsRef.current?.open();
  };

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get("notification/list");
      const notifications = await response.data;

      setNotifications(notifications);
    }

    if (user) {
      loadNotifications();
    }
  }, []);

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

  async function handleSaveData() {
    if (currentPage === "data") {
      if (name.trim().length !== 0 && username.trim().length !== 0) {
        api
          .put("user", {
            name,
            username,
          })
          .then(() => {
            ToastAndroid.show(
              "Dados atualizados com sucesso!",
              ToastAndroid.LONG
            );
          });

        updateUser({ ...user, name, username });
      } else {
        return ToastAndroid.show(
          "Os campos não podem estar vazios",
          ToastAndroid.LONG
        );
      }
    } else {
      if (currentPassword === "") {
        return ToastAndroid.show(
          "Por favor, preencha o campo de senha atual!",
          ToastAndroid.LONG
        );
      } else if (newPassword === "") {
        return ToastAndroid.show(
          "Por favor, preencha o campo de nova senha!",
          ToastAndroid.LONG
        );
      } else if (confirmNewPassword === "") {
        return ToastAndroid.show(
          "Por favor, preencha o campo de confirmação de senha!",
          ToastAndroid.LONG
        );
      } else if (newPassword !== confirmNewPassword) {
        return ToastAndroid.show("As senhas não conferem!", ToastAndroid.LONG);
      } else {
        api
          .put("user", {
            password: currentPassword,
            new_password: newPassword,
          })
          .then(() => {
            return ToastAndroid.show(
              "Senha atualizada com sucesso!",
              ToastAndroid.LONG
            );
          })
          .catch((error) => {
            console.log(error);
            switch (error.response.data.code) {
              case "user.password.incorrect":
                return ToastAndroid.show(
                  "Senha atual incorreta!",
                  ToastAndroid.LONG
                );
                break;
            }
          });

        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      }
    }
  }

  useEffect(() => {
    async function loadProfile() {
      try {
        const organization_id = await AsyncStorage.getItem(
          "@Grati:organization_id"
        );

        const { data } = await api.get(
          `/profile/${organization_id}/${user.id}?getAllData=false`
        );

        setProfile(data);
        setName(data.user.name);
        setUsername(data.user.username);
        setEmail(data.user.email);
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
        <GestureHandlerRootView>
          <Container>
            <Header>
              <ProfilePictureContainer>
                <ProfilePicture source={{ uri: profilePicture }} />
                <CameraIcon onPress={handlePickImage}>
                  <Photo width={32} height={32} />
                </CameraIcon>
              </ProfilePictureContainer>

              <NotificationsWrapper>
                <NotificationsBell
                  notifications={notifications}
                  onPress={handleOpenNotificationsModal}
                />
              </NotificationsWrapper>
            </Header>

            <TabMenu>
              <MenuOption
                selected={currentPage === "data"}
                onPress={() => setCurrentPage("data")}
              >
                <MenuOptionText selected={currentPage === "data"}>
                  Dados
                </MenuOptionText>
              </MenuOption>
              <MenuOption
                selected={currentPage === "switchPassword"}
                onPress={() => setCurrentPage("switchPassword")}
              >
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
                  {username !== "" && email !== "" && (
                    <>
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
                        disabled
                      />
                    </>
                  )}
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

            <ButtonSave onPress={handleSaveData}>
              <ButtonSaveText>Salvar alterações</ButtonSaveText>
            </ButtonSave>

            <Modalize
              ref={modalizeNotificationsRef}
              snapPoint={Dimensions.get("window").height - 200}
              modalStyle={{
                backgroundColor: theme.colors.light.background,
              }}
              flatListProps={{
                data: notifications,
                renderItem: ({ item }) => (
                  <NotificationCard key={item.id} notificationData={item} />
                ),
                keyExtractor: (item) =>
                  Math.floor(Math.random() * 100).toString(),
                showsVerticalScrollIndicator: false,
              }}
            />
          </Container>
        </GestureHandlerRootView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
